import React from 'react';

type RenderProps = {
    render: (name: string) => JSX.Element; // レンダリングプロップ
};

export const RenderProps: React.FC<RenderProps> = ({ render }) => {
    const name = 'React'; // サンプルデータ
    return <div>{render(name)}</div>; // レンダリングプロップ関数を呼び出してUIを生成
};
