const getCoordinates = () => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {
        coords: { latitude, longitude },
      } = position;
      resolve({ latitude, longitude });
    },
    (error) => {
      console.error('Error getting geolocation:', error);
      const defaultCoordinates = { latitude: 48.86, longitude: 2.33 };
      resolve(defaultCoordinates);
    });
  });
};

export { getCoordinates };
