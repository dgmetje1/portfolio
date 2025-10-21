import { useRef, useEffect } from 'react';
import * as THREE from 'three';

// 3D Background Component
export const ThreeBackground = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!canvasRef.current || typeof THREE === 'undefined') {
			console.log('Three.js not loaded yet or canvas not ready');
			return;
		}

		let animationId: number;

		try {
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			const renderer = new THREE.WebGLRenderer({
				canvas: canvasRef.current,
				alpha: true,
				antialias: true
			});

			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			camera.position.z = 5;

			// Create floating particles
			const particlesGeometry = new THREE.BufferGeometry();
			const particlesCount = 2000;
			const posArray = new Float32Array(particlesCount * 3);

			for (let i = 0; i < particlesCount * 3; i++) {
				posArray[i] = (Math.random() - 0.5) * 25;
			}

			particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

			const particlesMaterial = new THREE.PointsMaterial({
				size: 0.025,
				color: 0x60a5fa,
				transparent: true,
				opacity: 0.6,
				blending: THREE.AdditiveBlending
			});

			const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
			scene.add(particlesMesh);

			// Create smooth flowing spheres
			const spheres: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial, THREE.Object3DEventMap>[] = [];
			const sphereCount = 3;

			for (let i = 0; i < sphereCount; i++) {
				const geometry = new THREE.SphereGeometry(0.5, 32, 32);
				const material = new THREE.MeshPhongMaterial({
					color: i === 0 ? 0x3b82f6 : i === 1 ? 0x60a5fa : 0x06b6d4,
					transparent: true,
					opacity: 0.15,
					wireframe: false,
					emissive: i === 0 ? 0x3b82f6 : i === 1 ? 0x60a5fa : 0x06b6d4,
					emissiveIntensity: 0.3
				});
				const sphere = new THREE.Mesh(geometry, material);

				sphere.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5 - 2);

				sphere.userData = {
					velocityX: (Math.random() - 0.5) * 0.02,
					velocityY: (Math.random() - 0.5) * 0.02,
					originalX: sphere.position.x,
					originalY: sphere.position.y
				};

				spheres.push(sphere);
				scene.add(sphere);
			}

			// Add lighting
			const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
			scene.add(ambientLight);

			const pointLight1 = new THREE.PointLight(0x3b82f6, 1.5);
			pointLight1.position.set(5, 5, 5);
			scene.add(pointLight1);

			const pointLight2 = new THREE.PointLight(0x06b6d4, 1);
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
			};

			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('resize', handleResize);

			// Animation loop
			const animate = () => {
				animationId = requestAnimationFrame(animate);

				// Smooth mouse following
				mouseX += (targetMouseX - mouseX) * 0.05;
				mouseY += (targetMouseY - mouseY) * 0.05;

				// Gentle particle rotation
				particlesMesh.rotation.y += 0.0005;
				particlesMesh.rotation.x += 0.0002;

				// Animate spheres smoothly
				spheres.forEach((sphere, index) => {
					// Floating motion
					sphere.position.x += sphere.userData.velocityX;
					sphere.position.y += sphere.userData.velocityY;

					// Boundary check and reverse
					if (Math.abs(sphere.position.x) > 10) sphere.userData.velocityX *= -1;
					if (Math.abs(sphere.position.y) > 8) sphere.userData.velocityY *= -1;

					// Follow mouse with delay
					const delay = (index + 1) * 0.01;
					sphere.position.x += (mouseX * 3 - sphere.position.x) * delay;
					sphere.position.y += (mouseY * 3 - sphere.position.y) * delay;

					// Gentle pulsing
					const scale = 1 + Math.sin(Date.now() * 0.001 + index) * 0.1;
					sphere.scale.set(scale, scale, scale);
				});

				// Move lights with mouse
				pointLight1.position.x = 5 + mouseX * 2;
				pointLight1.position.y = 5 + mouseY * 2;

				pointLight2.position.x = -5 - mouseX * 2;
				pointLight2.position.y = -5 - mouseY * 2;

				// Smooth camera movement
				camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.03;
				camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.03;
				camera.lookAt(scene.position);

				renderer.render(scene, camera);
			};

			animate();

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
	}, []);

	return (
		<canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
	);
};
