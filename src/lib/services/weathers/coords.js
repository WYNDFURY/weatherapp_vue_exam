import {
  getNavigatorLocationCoordinates,
  getCityLocationCoordinates,
} from "@/lib/endpoints";
import { useWeatherLocationServices } from "@/lib/services/weathers/location";
import { ref } from "vue";


export const useCoordsServices = () => {
  const {
    background,
    currentDate,
    currentHour,
    currentWeather,
    setCurrentWeather,
    setDailyForecastsList,
    setHourlyForecastsList,
    hourlyForecastsList,
    dailyForecastsList,
  } = useWeatherLocationServices();
  const coords = ref();

  const setNavigatorLocationCoordinates = async () => {
    const coords = await getNavigatorLocationCoordinates();
    setCurrentWeather(coords);
    setDailyForecastsList(coords);
    setHourlyForecastsList(coords);
  };

  const setCityLocationCoordinates = async (cityName) => {
    const [{ lat: latitude, lon: longitude }] = await getCityLocationCoordinates(cityName);
    const coords = {latitude, longitude}
    setCurrentWeather(coords);
    setDailyForecastsList(coords);
    setHourlyForecastsList(coords);
  };

  return {
    setNavigatorLocationCoordinates,
    setCityLocationCoordinates,
    background,
    dailyForecastsList,
    hourlyForecastsList,
    currentDate,
    currentHour,
    currentWeather,
  };
};
