import "./Cards.css"


function Card({title,value}){
    return(
        <div className="Weather-cards">
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