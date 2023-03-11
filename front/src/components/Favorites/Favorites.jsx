import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
import { useEffect } from "react";

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    const dispatch = useDispatch();
    const handleOrder = ({target}) => {
        dispatch(orderCards(target.value))
    };
    const handleFilter = ({target}) => {
        dispatch(filterCards(target.value))
    };

    useEffect(() => {
     }, [myFavorites])
    
    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled="disabled">Order by</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>    
                <select onChange={handleFilter}>
                    <option value="order" disabled="disabled">Order by</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div>
            {myFavorites.map(
                character => {
                    return (<div>
                        <Link to={`/detail/${character.id}`}>
                            <h2 className="card-title">{character.name}</h2>
                        </Link>
                        <h2>{character.species}</h2>
                        <h2>{character.gender}</h2>
                        <img  src={character.image} alt="" />
                       

                    </div>)
                }

            )}
            </div>
        </div>
    )
};
export default Favorites