import "client-only";

export function getLocalStorage<T>(key: string, defaultValue: T): T {
    const stickyValue = localStorage.getItem(key);
    
    try {
        return (stickyValue !== null && stickyValue !== 'undefined')
            ? JSON.parse(stickyValue) as T
            : defaultValue;
    } catch (error) {
        console.error('Error parsing localStorage value:', error);
        return defaultValue;
    }
}

export function setLocalStorage<T>(key: string, value: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting localStorage value:', error);
    }
}