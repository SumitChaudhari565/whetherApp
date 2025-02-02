async function fetchData() {
    try {
      const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=f0085a95d0274181b5750544252001&q=London&days=7&aqi=yes&alerts=no');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Process data
    } catch (error) {
      console.error('Error:', error);
    }
  }
fetchData();