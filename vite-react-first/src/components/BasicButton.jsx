// 2024.03.24일 6차시 이벤트 처리와 useRef ===================================
// 'ednf'입력 + tap : 기본적인 컴포넌트 형식 자동 생성

// export default function BasicButton(props) {
//     return(
//         <button onClick={props.onClick}>click me..</button>
//     );
// }

// 위의 props 대신 onClick함수로 바로 사용하는 방식으로도 이용가능 
// export default function BasicButton({onClick}) {
//     return(
//         <button onClick={onClick}>click me..</button>
//     );
// }


// 부모 콘텐츠의 내용을 불러올때는 파라미터에 children 속성을 이용
// export default function BasicButton({onClick, children}) {
//     return(
//         <button onClick={onClick}>{children}</button>
//     );
// }


// 부모 콘텐츠의 내용을 불러올때는 파라미터에 children 속성을 이용
// export default function BasicButton({onClick, children}) {
//     return(
//         <button onClick={onClick}>{children}</button>
//     );
// }


// 베이직버튼에서 e.stopPropagation을 사용할때는 아래처럼 사용
export default function BasicButton({onClick, children}) {
    return(
        <button onClick={ e=> {
            e.stopPropagation();
            onClick();
        }}>{children}</button>
    );
}