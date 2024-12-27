import { create } from 'zustand';

// Zustandのストア作成
type BearState = {
  bears: number;
  increase: () => void;
  decrease: () => void;
};

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: () => set((state) => ({ bears: state.bears - 1 })),
}));

// Reactコンポーネントでの使用
const Zustand: React.FC = () => {
  const { bears, increase, decrease } = useBearStore();
  return (
    <div>
      <h1>Bears: {bears}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Zustand;
