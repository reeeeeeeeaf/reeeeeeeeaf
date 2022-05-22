const API_KEY = "4452f4f93cf1113e8a4a6561b71115b2";
function onGeoOk(position) {
  //   console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live it", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //뒷쪽 &units=metric은 섭씨로 바꾸는 옵션임
  console.log(url);
  //   fetch(url); // 자바스크립트로 url 부르기 브라우저 네트워크에서 확인가능
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}  🌡${data.main.temp}  @`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
