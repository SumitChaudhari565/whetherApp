async function fetchData() {
    var city = document.getElementById('sbar').value || 'Pune';
  
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f0085a95d0274181b5750544252001&q=${city}&days=7&aqi=yes&alerts=no`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Process data
        setData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-btn').addEventListener('click', fetchData);
    fetchData(); // Fetch data for Pune by default on page load
});

function setData(data) {
    document.getElementById('degree').innerHTML = data.current.temp_c + '°';
    document.getElementById('d1').innerHTML = data.current.condition.text;
    document.getElementById('logo').src = data.current.condition.icon;
    document.getElementById('date').innerHTML = data.current.last_updated;
    document.getElementById('01').innerHTML = data.current.wind_kph + ' km/h';
    document.getElementById('02').innerHTML = data.current.humidity + ' %';
    document.getElementById('03').innerHTML = data.current.pressure_mb + ' mb';
    document.getElementById('04').innerHTML = data.current.vis_km + ' km';
    document.getElementById('05').innerHTML = data.current.uv;
    document.getElementById('06').innerHTML = data.current.gust_kph + ' km/h';
    
    // Update daily forecast
    const forecast = data.forecast.forecastday;
    for (let i = 0; i < forecast.length; i++) {
        document.getElementById(`day${i + 1}`).innerHTML = forecast[i].day.maxtemp_c + '°';
        document.getElementById(`weather${i + 1}`).innerHTML = forecast[i].day.condition.text;
        document.getElementsByClassName('weather-icon')[i].src = forecast[i].day.condition.icon;
        document.getElementById(`prDate${i + 1}`).innerHTML = forecast[i].date;
    }
}