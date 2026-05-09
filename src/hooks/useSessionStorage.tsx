import { useState, useEffect, type Dispatch, type SetStateAction } from "react";

function useSessionStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
	const [value, setValue] = useState<T>(() => {
		const saved = sessionStorage.getItem(key);
		return saved ? JSON.parse(saved) : initialValue;
	});

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export default useSessionStorage;
