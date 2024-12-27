//高階コンポーネント（Higher-Order Component, HOC）: コンポーネントを引数として受け取り、新たなコンポーネントを返す関数

import React from 'react';

// 高階コンポーネントの例
const withExtraInfo = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const isAuthenticated = false; // ログイン状態を仮定

    if (!isAuthenticated) {
        return <p>ログインが必要です。</p>;
    }

    return (
      <div>
        <h2>追加情報</h2>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// 通常のコンポーネント
const SimpleComponent: React.FC = () => <p>これはシンプルなコンポーネントです。</p>;

// 高階コンポーネントを使って新しいコンポーネントを作成
const HOC = withExtraInfo(SimpleComponent);

export default HOC;
