const getWeather = async function(lat, lon){
    const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=885307ed8d8bed7cfb18a647ea6b3322`);
    const weatherData = await weatherFetch.json();
    return weatherData;
};

export {getWeather};
