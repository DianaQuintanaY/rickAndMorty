import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
    const onRandom = () => {
        const random = Math.floor(Math.random()*826);
        props.onSearch(random);
     }
    return  (
    <div>
    <ul>
    <li><Link to='/'>Logout</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/home' >Home</Link></li>
    <li><Link to='/favorites' >Favorites</Link></li>
    </ul>
    <SearchBar onSearch={props.onSearch} />
    <button onClick={onRandom}>Random</button> 
    </div>
    )
 }