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

// ==================== 2024.03.24 6차시   =======================

// import BasicButton from "./components/BasicButton";
// import UseRefHookDemo from "./components/UseRefHookDemo";

// export default function App() {

//   // function buttonClicked() { 네임드 함수 형태
//   const buttonClicked = () => { // 화살표 함수 형태
//     alert("hi");
//   }


//   return (
//     <>
//       {/* <button onClick={buttonClicked}>test</button> */}

//       {/* 함수를 직접 onClick 안에 넣어서도 사용 가능
//       <button onClick={()=> alert('hi')}>test</button> */}
// {/* 
//       {/* Basic 버튼 컴포넌트 불러오기 
//       <BasicButton onClick={buttonClicked}></BasicButton> */}

//       {/* BasicButton 안의 텍스트(콘텐츠:클릭해주세요)를 넘길때는 children 속성 사용*/}
//       <BasicButton onClick={buttonClicked}>클릭해주세요</BasicButton>

//       {/* 이벤트 버블링: 이벤트 발생시, 발생되는 컴포넌트의 상위 컴포넌트에 이벤트가 
//           전파가 된다 
        
//           => 아래의 Play Movie버튼을 누르면,  alert('Playing!') 메세지가 나온 후 
//              연달아 alert('you clicked on the toolbar') 메세지가 나온다
//               (Upload Image 버튼도 동일)
//         */}

//       {/* stopPropagation : 위쪽으로 전파하지 말라. 
//           (e)이벤트를 파라미터를 준 후, e.stopPropagation(); 사용하면,
//           alert('Playing!') 메세지만 뜨고 상위 컴포넌트인 div태그의
//           Toobar메세지는 연달아 뜨지 않음
//       */}

//       {/* <hr/>
//       <div className="Toolbar" onClick={() => alert('you clicked on the toolbar')}>
//         <button onClick={e =>{
//           e.stopPropagation();
//             alert('Playing!')
//           }}>Play Movie</button>
//         <button onClick={() => alert('Uploading!')}>Upload Image</button>
//       </div> */}

//       {/* 위의 버튼을 베이직 버튼으로 변경해보기 */}

//       <div className="Toolbar" onClick={() => alert('you clicked on the toolbar')}>
//         <BasicButton onClick={()=> alert('Playing!')}>Play Movie</BasicButton>
//         <BasicButton onClick={()=> alert('Uploading!')}>Upload Image</BasicButton>

//       </div>



//       <UseRefHookDemo/>
//     </>
//   );
// }
// ============================================================================================


// ============= 2024.03.24 7차시. State =============================

// import { useState } from "react";

// export default function App() {

//   // const count = 0; 
//   //위의 변수의 값을 보존하고 있는  State (state variable)로 변형하기
//   // 화면을 리렌더링하더라도 count값을 보존하기위해서 useState를 사용
//   // state값의 데이터를 변경시키는것을 별도로 생성해줘야 함 => setter
//   // useState는 배열의 형태이기 때문에 변수명을 사용할때, 
//   // [변수명, set변수명] 방식으로 이용하여, 변수의 값은 보존하고,
//   // set변수명의 값을 변화시켜 증감시킬 수 있다
//   const [count, setCount] = useState(0);

 
//   const increase = () => {
//     setCount(count + 1);
//   }

//   const decrease = () => {
//     setCount(count - 1);
//   }

//   return (
//     <>
//       <button onClick={decrease}>-</button> 
//         {count} 
//       <button onClick={increase}>+</button>
//     </>
//   )
// }


// import { useState } from "react";

// export default function App() {

//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   }

//   const decrease = () => {
//     setCount(count - 1);
//   }

//   return(
//     <>
//       <button onClick={decrease}>-</button> {count} <button onClick={increase}>+</button>
//     </>
//   );


// }



// import { useState } from "react";

// export default function App() {

//   const [text, setText] = useState('');
//   const [todos, setTodos] = useState([
//     {title: '고객에게 메일보내기', completed: false},
//     {title: '저녁 미팅', completed: false},
//     {title: '집 청소하기', completed: true}
//   ]);

//   const onTodoType = e => {
//     setText(e.target.value);   // 텍스트를 입력하면 변경됨
//   }

//   const onAddTodo = () => {
//     alert(text); // 텍스트값이 제대로 인식하는지 테스트
//     // array에 아이템을 추가하기 위해 immutable 한 방식을 사용한다.
//     // setTodos(todos.append({title: text, completed: false})); - 작동 안됨
//     setTodos([
//       // 기존의 배열에 새로운 아이템을 추가해서 todos를 풀어서 써야함
//       ...todos,
//       {title: text, completed: false}
//     ]) 
//   }

//   return(
//     <>
//       <h3>할일 목록</h3>
//       {/* onChange={}: 글자가 변경되었을때 발생하는 이벤트 함수 */}
//       <input type="text" value={text} onChange={onTodoType}/> 
//       <button onClick={onAddTodo}>할일추가</button>
//       <ul>
//         {
//           todos.map(todo => <li>{todo.title} - {todo.completed ? '완료': '진행중'}</li>)
//         }
//       </ul>
//     </>
//   );

// }

//======================= 2024.03.24 8차시. 서버데이터 useEffect nextjs ==========================


//==================================== useEffect 사용하기전 =============================================
// import { useState } from "react";

// export default function App() {

//   const [todos, setTodos] = useState([
//     {
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": false
//     },
//     {
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//   ])

//   // async(): 데이터를 비동기적으로 가져오며,
//   // await : 데이터를 가져올 때까지, 기다린다.
//   const onTodoDataFetch = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const json = await res.json();
//     console.log(json); // 데이터가 잘 받아와 지는지 확인
//     setTodos(json); // 데이터를 가져와서 버튼을 누르면 화면에 뿌려줌
//   };

//   return (
//     <>
//       <p>데이터 fetching과 useEffect</p>
//       {/* feching: 데이터를 가져오는 행위 */}
//       <hr/>
//       <button onClick={onTodoDataFetch}>서버에서 데이터 가져오기</button>
//       <p>할일 목록</p>
//       <ul>
//         {
//           todos.map(todo => <li>{todo.title} - {todo.completed ? '완료' : '진행중'}</li>)
//         }
//       </ul>
//     </>
//   )

// }

//==================================== useEffect 사용후 =============================================

// import { useState } from "react";

// export default function App() {

//   const [todos, setTodos] = useState([
//     {
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": false
//     },
//     {
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//   ]);

//   // useEffect(() => {
//   //   fetchTodosFromServer();
//   // }); // 이렇게 하면 리렌더링 될때마다 데이터를 가져오게 됨 비효율적

  
//   useEffect(() => {
//     fetchTodosFromServer();
//   },[]); // 이렇게 하면, 마운트 될때만 리렌더링되어 데이터를 가져온다
//   // 마운트는 최초의 렌더링


//   const onTodoDataFetch = async () => {
//     fetchTodosFromServer();
//   };

//   async function fetchTodosFromServer() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const json = await res.json();
//     console.log(json); 
//     setTodos(json); 
//   };

//   return (
//     <>
//       <p>데이터 fetching과 useEffect</p>
//       <hr/>
//       <button onClick={onTodoDataFetch}>서버에서 데이터 가져오기</button>
//       <p>할일 목록</p>
//       <ul>
//         {
//           todos.map(todo => <li>{todo.title} - {todo.completed ? '완료' : '진행중'}</li>)
//         }
//       </ul>
//     </>
//   )

// }



// ##########################################################################################
//==================================== 1차 과제 =============================================

import { useState, useEffect } from "react";

export default function App() {


  const [text, setText] = useState('Seoul');
  const [todos, setTodos] = useState(null); // 날씨 데이터를 저장하기 위한 상태 추가

  const onTodoType = e => {
    setText(e.target.value);   // 텍스트를 입력하면 변경됨
  };


  const onTodoWeather = async () => {
    await fetchTodosFromServer(text);
  };

  useEffect(() => {
    (async () => {
      await fetchTodosFromServer(text);
    })();
  },[]); 


  async function fetchTodosFromServer(CityName) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=b727321e784e6ace54d5ed8559bc7b2e`);
    const json = await res.json();
    console.log(json); 
    setTodos(json); 
  };
  
  return (
    <>
      <p>React기반 날씨 데이터 연동 어플리케이션 구현</p>
      <hr/>
      <input type="text" value={text} onChange={onTodoType}/> 
      <button onClick={onTodoWeather}>날씨데이터</button>
    
    </>
  );

}