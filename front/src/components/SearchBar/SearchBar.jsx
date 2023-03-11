import { useState } from 'react';
export default function SearchBar(props) {
   const [state, setState] = useState('');
   const onChange = (e) =>{
      const value = e.target.value;
      setState(value);
   };
   
   const onClick = () => {
      props.onSearch(state)
   }
   return (
      <div>
          <input onChange={onChange} type='search' />
          <button onClick={onClick}>Agregar</button> 
      </div>
   );
}
