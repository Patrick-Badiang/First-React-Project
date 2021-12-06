import './Card.css';


function Card(props){
    const classes ='card ' + props.className; 
    //makes sure that any value set on the className is added to the long string of classNames
    //Where it finally sets the div inside of the card
    return <div className = {classes}>{props.children}</div>;
}

export default Card;