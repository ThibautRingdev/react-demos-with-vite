function Weather({ temperature }) {
    let message = null;
    if (temperature < 15) {
        message = <p>it's cold outside</p>;
    }
    else if (temperature >= 15 && temperature <= 25){
        message = <p>it's nice outside</p>
    }
    else if (temperature > 25) {
        message = <p>it's hot outside</p>
    }
    return (
        <div>
            {message}
        </div>
    );
}

export default Weather;