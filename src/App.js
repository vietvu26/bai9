import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HelloWorld from './HelloWorld';
import { useState } from 'react';
import UserForm from "./UserForm";
import Greeting from "./Greeting";







// const DemoComponent = (props)=> {
//   return (
//     <div>
//       <div>Đây là tuổi: {props.age}</div>
//       <div>Đây là tên: {props.displayName}</div>
//     </div>
//   );
// };


function App() {
  // const [age, setAge] = useState(0);
  // const [name, setName] = useState('cee')
  // const onIncreaseAge = () => {
  //   setAge(age + 1)
  // }
  return(
    // <div>
    //   <HelloWorld/>
    // </div>
    <div className='container'>
    <Header/>
    <div>Day la header</div>
    <div>Day la header</div>
    
    {/* <div>{age}</div>
    <div>Tang age len 1</div>
    <DemoComponent age={age} displayName={name}/> */}


</div>
  )
}
export default App;

// Thuc hanh 4
// export default function App() {
//   const [userInput, setUserInput] = useState("")
//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   }
//   const handleButtonClick = (e) => {
//       alert(userInput)
//   }
//   return (
//     <div>
//       <input type="text" name="user" placeholder="Please type something" onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>Print</button>
//     </div>
//   );
// }



// function App () {
//   const [name, setName] = useState("");

//   return(
//     <div className="App">
      
//       <UserForm setName={setName} />
//       <Greeting name={name} />
//     </div>

//   )
// }
// export default App;

    
  
