import { Link } from "react-router-dom";
import {addFavorites, deleteFavorites} from "../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";


export default function Card(props) {
   
   const dispatch = useDispatch();
   const {myFavorites} = useSelector((state) => state);

   const onClose = (e) => {
      const value = e.target.id;
      props.onClose(Number(value));
   };
   const [isFav , setIsFav] = useState(false);
   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorites(props.id))
      }else{
         setIsFav(true);
         dispatch(addFavorites({   
            id:props.id,
            name:props.name,
            species:props.species,
            gender:props.gender,
            image:props.image,
            onClose: props.onClose
         }))
         
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites])

   return (
      <div>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) 
                : (<button onClick={handleFavorite}>🤍</button>)
         }
         <button id={props.id} onClick={onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className="card-title">{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="" />
      </div>
   );
};

