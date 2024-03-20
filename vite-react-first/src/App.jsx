import Avatar from './components/Avatar'


export default function App() {

  const greet = 'Hello world';
  const footerMessage = 'Copyright 2023 by Nam'
  return (
    <> 
     {/* <h1>Hello world</h1> static한 데이터*/}
      <h1>{greet}</h1>
      <hr /> 
      <Avatar/>
      {/*<h3>Copyright 2023 by Nam</h3>  static한 데이터*/}
      <h3>{footerMessage}</h3>
    </>
  );
}

