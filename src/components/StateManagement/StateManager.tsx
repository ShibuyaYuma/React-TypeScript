import React from "react";
import { observer } from "mobx-react-lite";
import { MobX } from "./MobX";
import Zustand from "./Zustand";
import Jotai from "./Jotai";

const StateManager: React.FC = observer(() => {
  return (
    <div>
      <p>カウント: {MobX.count}</p>
      <p>カウントの2倍: {MobX.doubled}</p> {/* doubledの値を表示 */}
      <button onClick={() => MobX.increment()}>増加</button>
      <button onClick={() => MobX.decrement()}>減少</button>
      <Zustand/>
      <Jotai/>
    </div>
  );
});

export default StateManager;
