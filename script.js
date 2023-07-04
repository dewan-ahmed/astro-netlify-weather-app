function getCurrentWeather() {
    const cityName = document.getElementById('cityName').value;
    const url = `http://localhost:{port}/getCurrentWeather/?q=${cityName}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Process the weather data
        document.getElementById('weatherData').textContent = JSON.stringify(data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }
  
  function getHistoricWeather() {
    const cityName = document.getElementById('cityName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const url = `http://localhost:{port}/getHistoricWeather/?q=${cityName}&startDate=${startDate}&endDate=${endDate}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Process the weather data
        document.getElementById('weatherData').textContent = JSON.stringify(data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }
  