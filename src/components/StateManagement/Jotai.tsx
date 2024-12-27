import React from 'react';
import { atom, useAtom } from 'jotai';

// Atomの定義
const countAtom = atom(0);

const Jotai: React.FC = () => {
  // useAtomを使ってAtomの値を取得・更新
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Jotai;
