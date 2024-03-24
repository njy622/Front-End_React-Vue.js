// 인풋의 텍스트박스에 마우스 포커스가 가도록 구현을 한다.
//  인풋박스 DOM엘레먼트에 직접 접근을 해야 함 (DOM에 직접 접근하는건 기본적으로 금지임)
// 위의 경우 useRef를 사용함

import { useRef } from "react"


export default function UseRefHookDemo() {

    //input 엘레먼트의 useRef를 생성
    const inputEl = useRef(null);

    const onButtonClick = () => {
        //input 박스에 focus 줘야함...
        inputEl.current.focus(); 
        //useRef를 이용할땐, current함수를 사용후, 그 이후에 사용할 이벤트함수(focus)를
        선언해줌
    }
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>클릭시 인풋받스에 포커스 주어짐</button>
        </>
    )
}