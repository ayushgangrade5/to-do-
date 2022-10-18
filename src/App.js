
import Navbar from './components/Navbar';
import Todo from './components/first';
import Login from './components/login page';



function App() {
  return (
    <>
      <Navbar title="Todos list" />
      <Login/>
      
      <div className='container'>
       <Todo/>
      </div>

    </>
  );
}

export default App;