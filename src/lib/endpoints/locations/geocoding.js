const fetchCityCoordinates = async (city) => {

    const apiKey = "3bf91878b99224bae4b99eddee3489f2";
    const lang = "fr"
    const countryCode = "ISO 3166"
    const cityName = city;

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=${apiKey}`);
    if(!response.ok) return;
    return response.json();
}

export {fetchCityCoordinates};