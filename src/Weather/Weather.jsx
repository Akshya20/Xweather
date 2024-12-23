import { useState } from "react";
import Card from "../Card/Card";





function Weath1() {
    const [weather, setweather] = useState(null);
    const [city, setcity] = useState("");
    const [loading, setloading] = useState(false);


    const fetchWeather = async () => {
        setloading(true);
        const API_KEY = `09c8c5ca8d424a2da0d150321241112`;
        const endpoint = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                alert("Please fill out these fields");
                setloading(false);
                return;
            }
            const data = await response.json();
            setweather(data);
           
        } catch {
            console.log("error")
        }finally {
            setloading(false); 
        }
    }
    return (
        <div style={{ backgroundColor: "lightblue", width: "100%", height: "100%" }}>
            <input type="text" value={city}
                onChange={(e) => { setcity(e.target.value) }}></input>
            <button style={{ backgroundColor: "lightgreen", borderRadius: "5px" }} onClick={fetchWeather}>Submit</button>
            <div   id="second" className="weather-cards" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "15px" }}>
                {loading ? (
                    <p>Loading data...</p>
                ) : (weather && (
                        <>
                            <div  id="first" className="weather-card">
                                <Card title="Temperature" value={`${weather.current.temp_c}C`} />
                            </div>
                            <div  id="first" className="weather-card">
                                <Card title="Humidity" value={`${weather.current.humidity}%`} />
                            </div>
                            <div  id="first"  className="weather-card">
                                <Card title="Condition" value={weather.current.condition.text} />
                            </div>
                            <div  id="first" className="weather-card">
                                <Card title="Wind-Speed" value={`${weather.current.wind_kph}`} />
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
}

export default Weath1;
