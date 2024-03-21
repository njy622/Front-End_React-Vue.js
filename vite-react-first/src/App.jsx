import './App.css'
import { people } from './data.js';


export default function List() {

  // return (
  //   <ul>
  //     <li>
  //       <img 
  //         src={people[0].imgeUrl}
  //         alt={people[0].name} 
  //       />
  //       <p>
  //         <b>{people[0].name}:</b>
  //         {' ' + people[0].profession + ' '}
  //         known for {people[0].accomplishment}
  //       </p>
  //     </li>
  //   </ul>
  // );  해당 코드를 반복문으로 변경하여 여러명 한번에 표현

  const personList = people.map(person =>
    <li key={person.id}>   
    // 반복적인 태그를 이용할때는, key를 부여해서, 이용한다.
    // 주로 데이터의 id값을 가져와서 key값에 넣음
      <img 
        src={person.imgeUrl}
        alt={person.name} 
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
    );

    return (
      <ul>{personList}</ul>
    );

}

