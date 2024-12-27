import React, { useEffect, useState, useCallback, useMemo, useReducer, useContext, createContext } from 'react';
import useLocalStorage from './CustomHook';

//  useState            関数コンポーネントで状態を管理するために使用。                  const [state, setState] = useState(initialState);
//  useEffect	        サイドエフェクト（データ取得、DOM操作など）を管理。	            useEffect(() => { /* サイドエフェクト処理 */ }, [deps]);
//  useContext	        コンテキストの値を取得し、コンポーネントで使用。                const value = useContext(MyContext);
//  useReducer	        より複雑な状態管理のために使用。useStateの代替。	           const [state, dispatch] = useReducer(reducer, initialState);
//  useCallback	        関数をメモ化して再レンダリングを防ぐ。	                       const memoizedCallback = useCallback(() => { /* 処理 */ }, [deps]);
//  useMemo	            計算結果をメモ化して不要な再計算を防ぐ。	                   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
//  useRef	            DOM要素の参照や値の保持に使用。	                              const myRef = useRef(null);
//  useLayoutEffect	    DOM描画後、画面のレイアウト関連の副作用を管理。	                useLayoutEffect(() => { /* レイアウト関連の処理 */ }, [deps]);
//  useImperativeHandle	子コンポーネントのインスタンス値を親コンポーネントから制御。     useImperativeHandle(ref, () => ({ /* 制御する値 */ }));
//  useDebugValue	    開発者ツールでカスタムHookの状態をデバッグするために使用。       useDebugValue(value);

const ExampleEffect: React.FC = () => {
    const [count, setCount] = useState(0);

    // useEffectで副作用を定義
    useEffect(() => {
        // 副作用: コンポーネントがマウントされるたびに実行
        document.title = `Count: ${count}`;
        
        // クリーンアップ関数（オプション）
        return () => {
        document.title = 'React App';
        };
    }, [count]); // `count` が変わるたびに実行

    return (
        <div>
        <p>カウント: {count}</p>
        <button onClick={() => setCount(count + 1)}>カウントアップ</button>
        </div>
    );
};

const ExampleCallback: React.FC = () => {
    const [count, setCount] = useState(0);

    // メモ化されたコールバック関数
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);  // 依存配列が空なので、最初のレンダリング時にのみメモ化される

    return (
        <div>
        <p>カウント: {count}</p>
        <button onClick={increment}>カウントアップ</button>
        </div>
    );
};

const ExpensiveMemo: React.FC = () => {
    const [number, setNumber] = useState(0);
  
    // 重い計算をメモ化
    const expensiveMemo = useMemo(() => {
      console.log('計算中...');
      let result = 0;
      for (let i = 0; i < 1000000000; i++) {
        result += i;
      }
      return result + number;
    }, [number]);  // `number` が変わるたびに計算し直す
  
    return (
      <div>
        <p>計算結果: {expensiveMemo}</p>
        <button onClick={() => setNumber(prev => prev + 1)}>増加</button>
      </div>
    );
};

const initialState = { count: 0 };

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Reducer: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>増加</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>減少</button>
        </div>
    );
};

const ThemeContext = createContext<string>('light');

const ChildComponent: React.FC = () => {
    const theme = useContext(ThemeContext);
  
    return <div>The current theme is {theme}</div>;
};

const Hooks: React.FC = () => {
    const [theme, setTheme] = useState<string>('light');
    const [name, setName] = useLocalStorage('name', 'React');
    return(
        <div>
            <ExampleEffect/>
            <ExampleCallback/>
            <ExpensiveMemo/>
            <Reducer/>
            <ThemeContext.Provider value={theme}>
                <ChildComponent />
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Toggle Theme
                </button>
            </ThemeContext.Provider>
            <h1>こんにちは, {name}!</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
        </div>
    )
}

export default Hooks;
