import './Avatar.css'

export default function Avatar() {
    // export 할때 
    // 네임드 export: export funcion Avartar() : import할때 {Avartar} 로 써줘야함,
    // default export: import할때 Avartar로 이용({}표시 안해도 됨)
    //  export 할때 기본룰을 default를 넣는것

    const imgSrc = 'https://i.imgur.com/7vQD0fPs.jpg';

    return (
        <>
        <img 
        src= {imgSrc}
        alt="Gregorio Y. zara" 
        className='avatar'
      />
        </>
    );
}

// 아바타 컴포넌트 생성