import {
  fetchLocationCurrentWeather,
  fetchLocationDailyForecasts,
  fetchLocationHourlyForecasts
} from "@/lib/endpoints";
import { ref } from "vue";

export const useWeatherLocationServices = () => {

    // CURRENT WEATHER --------------------
  const background = ref();

  // current day
  const currentDay = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  // current date/hour
  
  const currentHour = currentDay.toLocaleTimeString("fr");
  const currentDate = currentDay.toLocaleDateString("fr", options);
  const currentWeather = ref(null);


  const setCurrentWeather = async (coordinates) => {
    currentWeather.value = await fetchLocationCurrentWeather(coordinates);
    background.value = currentWeather.value.weather[0].main;
  };

        // FORECASTS --------------------

  const dailyForecastsList = ref(null);
  const hourlyForecastsList = ref(null);

    // DAILY

  // function qui calcule l'avg par jour sur base des forecasts tous les 3h (array de 40)
  const calculateAveragesByDay = (forecasts) => {
    const forecastsByDay = forecasts.reduce((forecastsPerDay, forecast) => { 
      
      // rassemble les mêmes itérations de jour entre elles
      const dateString = forecast.dt_txt.split(' ')[0];

      // crée un object Date sur base de la date que sort l'api pour pouvoir en ressortir le jour
      const date = new Date(dateString);
      const weekDay = date.toLocaleDateString("fr", { weekday: "long" });
      
      if (!forecastsPerDay[dateString]) {
        forecastsPerDay[dateString] = {
          weekDay,
          forecasts: [],
        };
      }
      forecastsPerDay[dateString].forecasts.push(forecast);
      
      
      return forecastsPerDay;
      
      
    }, {});


    const averagesByDay = Object.keys(forecastsByDay).map((dateString) => {
      const { weekDay, forecasts } = forecastsByDay[dateString];

      const minTemp = Math.min(...forecasts.map((forecast) => forecast.main.temp));
      const maxTemp = Math.max(...forecasts.map((forecast) => forecast.main.temp));
      const icon = forecasts[0].weather[0].icon;

      return {
        dateString,
        weekDay,
        minTemp,
        maxTemp,
        icon
      };
    });
    return averagesByDay;
  };


  // function qui utilise la function de calcul à partir du fetch (getDailyForecasts) et qui assigne le tout dans dailyForecastsList

  const setDailyForecastsList = async (coordinates) => {
    const forecasts = await fetchLocationDailyForecasts(coordinates);
    dailyForecastsList.value = calculateAveragesByDay(forecasts?.list);
  };

      // HOURLY

    // function qui fetch les données hourly de l'api
  const setHourlyForecastsList = async (coordinates) => {
    const forecasts = await fetchLocationHourlyForecasts(coordinates);
    hourlyForecastsList.value = forecasts?.list;
  };


  return {
    background,
    currentHour,
    currentDate,
    currentWeather,
    dailyForecastsList,
    hourlyForecastsList,
    setCurrentWeather,
    setDailyForecastsList,
    setHourlyForecastsList,
  };
};
