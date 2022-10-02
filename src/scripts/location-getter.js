const getLocation = async function(town){
    const locRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=3&appid=885307ed8d8bed7cfb18a647ea6b3322`);
    const data = await locRes.json();
    return data;
};

export {getLocation};
