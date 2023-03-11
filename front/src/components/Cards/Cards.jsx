import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return (<div>
      {characters.map(element => <Card 
      id={element.id}
      name={element.name}
      species={element.species}
      gender={element.gender}
      image={element.image}
      onClose={props.onClose}
      />)}
   </div>);
}
