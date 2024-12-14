import "./Cards.css"


function Card({title,value}){
    return(
        <div id="first" className="weather-cards">
            <p>
                {title}
            </p>
            <p>
                {value}
            </p>
        </div>
    );
}

export default Card;
