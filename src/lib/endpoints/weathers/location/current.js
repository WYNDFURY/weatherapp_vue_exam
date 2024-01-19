const fetchWeather = async (coordinates) => {

    const TEMP = {
        CELCIUS: "metric",
        FAHRENHEIT: "imperial"
    }

    const {latitude, longitude} = coordinates;

    const unit = TEMP.CELCIUS;
    const apiKey = "3bf91878b99224bae4b99eddee3489f2";
    const lang = "fr"
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=${lang}&units=${unit}`);
    if(!response.ok) return;
    return response.json();

    

}


export {fetchWeather};