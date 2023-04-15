import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Todo from './pages/Todo';
import Todoform from './pages/Todoform';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/todoform' element={<Todoform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
