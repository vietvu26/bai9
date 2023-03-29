import logo from './logo.svg';
import './App.css';

function App() {
  const isMessage = true;
  const message = "Hello world"

  const todos = ["Learn reajs","Learn vuejs"]
  return (
    <div className="App">
      { 
        todos.map((todo, index) => {
          return <p key={index} >{todo}</p>
        })
      }
    </div>
  );
}
// function App() {
//   const isUserLoggedIn = true;

//   return (
//     <div>
//       {isUserLoggedIn ? (
//         <h1>Hello User</h1>
//       ) : (
//         <h1>Login Now</h1>
//       )}
//     </div>
//   );
// }
export default App;




