import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites/Favorites';


function App () {
  const [characters,setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 };
 useEffect(() => { !access && navigate('/')}, [access]);


  const onSearch = (character) => {
    if(characters.findIndex((item)=>{return item.id === Number(character)}) !== -1){
      window.alert('Este personaje ya se encuentra agregado')
    } else {
    //  fetch(`https://rickandmortyapi.com/api/character/${character}`)
        fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('No hay personajes con ese ID');
      }
      });
    }
  };
  const onClose = (character) => {
    const charactersFilter = characters.filter(item => { return  item.id !== character});
    setCharacters(charactersFilter)

  };
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/'? <Form login={login} />: <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App
