const houses = ['Serpentard', 'Griffondor', 'Serdaigle', 'Pouffsoufle'];

const reducers = (state, action) => ({
  houses,
  selectedHouses: houses[Math.floor(Math.random() * 4)]
});

export default reducers;