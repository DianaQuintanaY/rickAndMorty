import { Link } from "react-router-dom";
import {addFavorites, deleteFavorites} from "../../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react';
import "./card.css"
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
            image:props.image
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
      <div className="card">

         <div>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) 
                : (<button onClick={handleFavorite}>🤍</button>)
         }
         <button id={props.id} onClick={onClose}>X</button>
         </div>

         <figure>
            <img  src={props.image} alt="" />
            <figcaption>
               <Link to={`/detail/${props.id}`} className="card-title">
                  <h2>{props.name}</h2>
               </Link>
            </figcaption>
         </figure>

         <div className="info">
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
};

