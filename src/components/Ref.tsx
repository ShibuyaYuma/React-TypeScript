import React, { useRef, Component, createRef } from 'react';

const Ref: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // DOM要素にフォーカスを設定
        }
    };

    const divRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (divRef.current) {
        divRef.current.scrollIntoView({ behavior: 'smooth' }); // スムーズスクロール
        }
    };

    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        videoRef.current?.play();
    };

    const handlePause = () => {
        videoRef.current?.pause();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="入力してください" />
            <button onClick={handleFocus}>フォーカスを設定</button>

            <button onClick={handleScroll}>スクロールする</button>
            <div style={{ height: '100vh' }}></div>
            <div ref={divRef} style={{ backgroundColor: 'yellow' }}>
                スクロール先の要素
            </div>
            <video ref={videoRef} width="300" controls>
                <source src="example.mp4" type="video/mp4" />
            </video>
            <button onClick={handlePlay}>再生</button>
            <button onClick={handlePause}>一時停止</button>
        </div>
    );
};

// クラスコンポーネント
// class Ref extends Component {
//     inputRef = createRef<HTMLInputElement>();
  
//     handleFocus = () => {
//         if (this.inputRef.current) {
//                 this.inputRef.current.focus(); // DOM要素にフォーカスを設定
//         }
//     };
  
//     render() {
//         return (
//             <div>
//                 <input ref={this.inputRef} type="text" placeholder="入力してください" />
//                 <button onClick={this.handleFocus}>フォーカスを設定</button>
//             </div>
//         );
//     }
// }

// const Ref: React.FC = () => {
//     const divRef = useRef<HTMLDivElement>(null);

//     const handleScroll = () => {
//         if (divRef.current) {
//         divRef.current.scrollIntoView({ behavior: 'smooth' }); // スムーズスクロール
//         }
//     };

//     return (
//         <div>
//             <button onClick={handleScroll}>スクロールする</button>
//             <div style={{ height: '100vh' }}></div>
//             <div ref={divRef} style={{ backgroundColor: 'yellow' }}>
//                 スクロール先の要素
//             </div>
//         </div>
//     );
// };
  

export default Ref;
