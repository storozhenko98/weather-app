const getWeather = async function(lat, lon){
    console.log("Sent" + lat);
    console.log("Sent" + lon);
    console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=885307ed8d8bed7cfb18a647ea6b3322`);
    const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=885307ed8d8bed7cfb18a647ea6b3322`);
    const weatherData = await weatherFetch.json();
    console.log(weatherData);
    return weatherData;
};

export {getWeather};
