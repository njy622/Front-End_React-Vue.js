// import './App.css'
// import { people } from './data.js';




// export default function List() {

//   // return (
//   //   <ul>
//   //     <li>
//   //       <img 
//   //         src={people[0].imgeUrl}
//   //         alt={people[0].name} 
//   //       />
//   //       <p>
//   //         <b>{people[0].name}:</b>
//   //         {' ' + people[0].profession + ' '}
//   //         known for {people[0].accomplishment}
//   //       </p>
//   //     </li>
//   //   </ul>
//   // );  해당 코드를 반복문으로 변경하여 여러명 한번에 표현

//   const personList = people.map(person =>
//     <li key={person.id}>   
//     // 반복적인 태그를 이용할때는, key를 부여해서, 이용한다.
//     // 주로 데이터의 id값을 가져와서 key값에 넣음
//       <img 
//         src={person.imgeUrl}
//         alt={person.name} 
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//     );

//     return (
//       <ul>{personList}</ul>
//     );

// }

// 2024.03.24 6차시   =======================

import BasicButton from "./components/BasicButton";
import UseRefHookDemo from "./components/UseRefHookDemo";

export default function App() {

  // function buttonClicked() { 네임드 함수 형태
  const buttonClicked = () => { // 화살표 함수 형태
    alert("hi");
  }


  return (
    <>
      {/* <button onClick={buttonClicked}>test</button> */}

      {/* 함수를 직접 onClick 안에 넣어서도 사용 가능
      <button onClick={()=> alert('hi')}>test</button> */}
{/* 
      {/* Basic 버튼 컴포넌트 불러오기 
      <BasicButton onClick={buttonClicked}></BasicButton> */}

      {/* BasicButton 안의 텍스트(콘텐츠:클릭해주세요)를 넘길때는 children 속성 사용*/}
      <BasicButton onClick={buttonClicked}>클릭해주세요</BasicButton>

      {/* 이벤트 버블링: 이벤트 발생시, 발생되는 컴포넌트의 상위 컴포넌트에 이벤트가 
          전파가 된다 
        
          => 아래의 Play Movie버튼을 누르면,  alert('Playing!') 메세지가 나온 후 
             연달아 alert('you clicked on the toolbar') 메세지가 나온다
              (Upload Image 버튼도 동일)
        */}

      {/* stopPropagation : 위쪽으로 전파하지 말라. 
          (e)이벤트를 파라미터를 준 후, e.stopPropagation(); 사용하면,
          alert('Playing!') 메세지만 뜨고 상위 컴포넌트인 div태그의
          Toobar메세지는 연달아 뜨지 않음
      */}

      {/* <hr/>
      <div className="Toolbar" onClick={() => alert('you clicked on the toolbar')}>
        <button onClick={e =>{
          e.stopPropagation();
            alert('Playing!')
          }}>Play Movie</button>
        <button onClick={() => alert('Uploading!')}>Upload Image</button>
      </div> */}

      {/* 위의 버튼을 베이직 버튼으로 변경해보기 */}

      <div className="Toolbar" onClick={() => alert('you clicked on the toolbar')}>
        <BasicButton onClick={()=> alert('Playing!')}>Play Movie</BasicButton>
        <BasicButton onClick={()=> alert('Uploading!')}>Upload Image</BasicButton>

      </div>



      <UseRefHookDemo/>
    </>
  );
}

