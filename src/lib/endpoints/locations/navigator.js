const getCoordinates = () => {
  return new Promise((resolve) => {
     navigator.geolocation.getCurrentPosition((position) => {
      const {
        coords: { latitude, longitude },
      } = position;

     resolve({ latitude, longitude });
      
    });
  });
};

export { getCoordinates };