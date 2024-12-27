import { useState } from 'react';

// カスタムフックの作成
function useLocalStorage<T>(key: string, initialValue: T) {
    // ローカルストレージからデータを取得
    const storedValue = localStorage.getItem(key);
    
    // 初期値としてローカルストレージの値を使う、ない場合はinitialValue
    const [value, setValue] = useState<T>(storedValue ? JSON.parse(storedValue) : initialValue);
  
    // 値が変わったときにlocalStorageに保存
    const setStoredValue = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };
  
    return [value, setStoredValue] as const;
}

export default useLocalStorage;