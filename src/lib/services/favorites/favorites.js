import { ref } from "vue";

export const useFavoritesServices = () => {
  const favoritesCities = ref(
    JSON.parse(localStorage.getItem("favoritesCities")) || []
  );

  const addCity = (cityName) => {
    favoritesCities.value.push(cityName);
    localStorage.setItem(
      "favoritesCities",
      JSON.stringify(favoritesCities.value)
    );
  };

  const deleteCity = (deletedCity) => {
    favoritesCities.value = favoritesCities.value.filter(
      (city) => city !== deletedCity
    );
    localStorage.setItem(
      "favoritesCities",
      JSON.stringify(favoritesCities.value)
    );
  };

  return {
    favoritesCities,
    addCity,
    deleteCity,
  };
};