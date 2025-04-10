const weatherData = {
    "hà nội": {
        temperature: 28,
        humidity: 79,
        windSpeed: 5,
        description: "Có mây",
        icon: "⛅"
    },
    "hồ chí minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "đà nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("result");

function renderWeather(cityData, cityName) {
    result.innerHTML = `
    <div class="weather-card">
      <div class="row ">
        <div class="col-md-4 ">
          <div class="weather-icon">${cityData.icon}</div>
          <div class="fs-2 fw-bold">${cityData.temperature}°C</div>
        </div>
        <div class="col-md-8">
          <h4 class="fw-bold text-capitalize">${cityName}</h4>
          <p class="mb-1">${cityData.description}</p>
          <p class="mb-1">Độ ẩm: ${cityData.humidity}%</p>
          <p class="mb-1">Tốc độ gió: ${cityData.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  `;
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim().toLowerCase();
    const data = weatherData[city];

    if (data) {
        renderWeather(data, city);
    } else {
        result.innerHTML = `<div class="alert alert-danger">Không tìm thấy thành phố!</div>`;
    }
});