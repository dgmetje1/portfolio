import { useCallback, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

const useToggle: (
	defaultValue?: boolean
) => [boolean, () => void, Dispatch<SetStateAction<boolean>>] = defaultValue => {
	const [value, setValue] = useState(!!defaultValue);

	const toggle = useCallback(() => {
		setValue(x => !x);
	}, []);

	return [value, toggle, setValue];
};

export default useToggle;
