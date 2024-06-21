import { useState } from 'react';


function useLocalStorage(key, initialValue) {
    const storedValue = localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : initialValue;
    const [value, setValue] = useState(storedValue);

    const setLocalStorageValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setLocalStorageValue];
}

export default useLocalStorage;
