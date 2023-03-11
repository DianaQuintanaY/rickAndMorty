import {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

 export default function Detail (){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return (
        <div>
            <div>
                <h1>NOMBRE: {character?.name}</h1>
                <p>STATUS: {character?.status}</p>
                <p>ESPECIE: {character?.species}</p>
                <p>GENERO: {character?.gender}</p>
                <p>ORIGIN: {character?.origin}</p>
            </div>
            <img alt='' src={character.image} width='300px'/>
            <button><Link to='/home'>HOME</Link></button>
        </div>
    );
 }