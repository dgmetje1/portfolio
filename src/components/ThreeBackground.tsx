import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

// 3D Background Component
export const ThreeBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		setPrefersReducedMotion(mediaQuery.matches);

		const handler = (event: MediaQueryListEvent) => {
			setPrefersReducedMotion(event.matches);
		};

		mediaQuery.addEventListener('change', handler);
		return () => mediaQuery.removeEventListener('change', handler);
	}, []);

	useEffect(() => {
		if (!canvasRef.current || typeof THREE === 'undefined') {
			console.log('Three.js not loaded yet or canvas not ready');
			return;
		}

		// Use IntersectionObserver to only animate when visible
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ rootMargin: '100px' }
		);

		observer.observe(canvasRef.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!canvasRef.current || typeof THREE === 'undefined' || prefersReducedMotion || !isVisible) {
			return;
		}

		let animationId: number;

		try {
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			const renderer = new THREE.WebGLRenderer({
				canvas: canvasRef.current,
				alpha: true,
				antialias: true,
				powerPreference: 'high-performance'
			});

			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			camera.position.z = 5;

			// Create floating particles - reduced count for better performance
			const particlesGeometry = new THREE.BufferGeometry();
			const particlesCount = 800; // Reduced from 2000
			const posArray = new Float32Array(particlesCount * 3);

			for (let i = 0; i < particlesCount * 3; i++) {
				posArray[i] = (Math.random() - 0.5) * 25;
			}

			particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

			const particlesMaterial = new THREE.PointsMaterial({
				size: 0.03,
				color: 0x60a5fa,
				transparent: true,
				opacity: 0.5,
				blending: THREE.AdditiveBlending,
				sizeAttenuation: true
			});

			const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
			scene.add(particlesMesh);

			// Create smooth flowing spheres
			const spheres: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial, THREE.Object3DEventMap>[] = [];
			const sphereCount = 3;

			for (let i = 0; i < sphereCount; i++) {
				const geometry = new THREE.SphereGeometry(0.5, 24, 24); // Reduced segments
				const material = new THREE.MeshPhongMaterial({
					color: i === 0 ? 0x3b82f6 : i === 1 ? 0x60a5fa : 0x06b6d4,
					transparent: true,
					opacity: 0.12,
					wireframe: false,
					emissive: i === 0 ? 0x3b82f6 : i === 1 ? 0x60a5fa : 0x06b6d4,
					emissiveIntensity: 0.2
				});
				const sphere = new THREE.Mesh(geometry, material);

				sphere.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5 - 2);

				sphere.userData = {
					velocityX: (Math.random() - 0.5) * 0.015,
					velocityY: (Math.random() - 0.5) * 0.015,
					originalX: sphere.position.x,
					originalY: sphere.position.y
				};

				spheres.push(sphere);
				scene.add(sphere);
			}

			// Add lighting
			const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
			scene.add(ambientLight);

			const pointLight1 = new THREE.PointLight(0x3b82f6, 1);
			pointLight1.position.set(5, 5, 5);
			scene.add(pointLight1);

			const pointLight2 = new THREE.PointLight(0x06b6d4, 0.8);
			pointLight2.position.set(-5, -5, 3);
			scene.add(pointLight2);

			let mouseX = 0;
			let mouseY = 0;
			let targetMouseX = 0;
			let targetMouseY = 0;

			const handleMouseMove = (event: MouseEvent) => {
				targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
				targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
			};

			const handleResize = () => {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(window.innerWidth, window.innerHeight);
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			};

			window.addEventListener('mousemove', handleMouseMove, { passive: true });
			window.addEventListener('resize', handleResize, { passive: true });

			let lastTime = 0;

			// Animation loop
			const animate = (time: number) => {
				animationId = requestAnimationFrame(animate);

				// Throttle to 60fps max
				if (time - lastTime < 16) return;
				lastTime = time;

				// Smooth mouse following
				mouseX += (targetMouseX - mouseX) * 0.04;
				mouseY += (targetMouseY - mouseY) * 0.04;

				// Gentle particle rotation
				particlesMesh.rotation.y += 0.0003;
				particlesMesh.rotation.x += 0.0001;

				// Animate spheres smoothly
				spheres.forEach((sphere, index) => {
					// Floating motion
					sphere.position.x += sphere.userData.velocityX;
					sphere.position.y += sphere.userData.velocityY;

					// Boundary check and reverse
					if (Math.abs(sphere.position.x) > 10) sphere.userData.velocityX *= -1;
					if (Math.abs(sphere.position.y) > 8) sphere.userData.velocityY *= -1;

					// Follow mouse with delay
					const delay = (index + 1) * 0.008;
					sphere.position.x += (mouseX * 2.5 - sphere.position.x) * delay;
					sphere.position.y += (mouseY * 2.5 - sphere.position.y) * delay;

					// Gentle pulsing
					const scale = 1 + Math.sin(time * 0.0008 + index) * 0.08;
					sphere.scale.set(scale, scale, scale);
				});

				// Move lights with mouse
				pointLight1.position.x = 5 + mouseX * 1.5;
				pointLight1.position.y = 5 + mouseY * 1.5;

				pointLight2.position.x = -5 - mouseX * 1.5;
				pointLight2.position.y = -5 - mouseY * 1.5;

				// Smooth camera movement
				camera.position.x += (mouseX * 0.2 - camera.position.x) * 0.02;
				camera.position.y += (mouseY * 0.2 - camera.position.y) * 0.02;
				camera.lookAt(scene.position);

				renderer.render(scene, camera);
			};

			animate(0);

			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
				window.removeEventListener('resize', handleResize);
				cancelAnimationFrame(animationId);
				renderer.dispose();
				particlesGeometry.dispose();
				particlesMaterial.dispose();
				spheres.forEach(sphere => {
					sphere.geometry.dispose();
					sphere.material.dispose();
				});
			};
		} catch (error) {
			console.error('Three.js initialization error:', error);
		}
	}, [prefersReducedMotion, isVisible]);

	// Show a static fallback when reduced motion is preferred or not visible
	if (prefersReducedMotion || !isVisible) {
		return (
			<canvas
				ref={canvasRef}
				className="fixed top-0 left-0 w-full h-full pointer-events-none"
				style={{ zIndex: 0 }}
				aria-hidden="true"
			/>
		);
	}

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none"
			style={{ zIndex: 0 }}
			aria-hidden="true"
		/>
	);
};
