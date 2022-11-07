const apiKey = "4bbff4a3c69a9b2c5ec037d55762eb79";
const langage = "fr";
const counter = 7;
const liege = {
  latitude: 50.6333,
  longitude: 5.56667,
};
// https://api.openweathermap.org/data/2.5/forecast?lat=50.6333&lon=5.56667&appid=4bbff4a3c69a9b2c5ec037d55762eb79&cnt=7&lang=fr&units=metric
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${liege.latitude}&lon=${liege.longitude}&appid=${apiKey}&cnt=${counter}&lang=${langage}&units=metric`;

// function fetchingDatas() {
//   return fetch(weatherUrl).then((response) => {
//     if (response.status >= 200 && response.status < 300) {
//       return response.json();
//     } else {
//       return response.json().then((error) => {
//         console.log(error);
//         throw new Error("Something went wrong - server-side");
//       });
//     }
//   });
// }

// async function displayDatas() {
//   const calls = await fetchingDatas();
//   calls.list.forEach((call) => {
//     const templateElement = document.importNode(
//       document.querySelector("template").content,
//       true
//     );
//     templateElement.getElementById("date").textContent = `${call.dt_txt}`; // 2022.11.02 15.00.00
//     templateElement.getElementById(
//       "image"
//     ).src = `http://openweathermap.org/img/w/${call.weather[0].icon}.png`;

//     document.querySelector("main").appendChild(templateElement);
//   });
// }
// displayDatas();

// fetch(weatherUrl)
//   .then((response) => response.json())
//   .then((response) => {
//     const resplist = response.list;
//     resplist.forEach((call) => {
//       const templateElement = document.importNode(
//         document.querySelector("template").content,
//         true
//       );
//       templateElement.getElementById("date").textContent = `${call.dt_txt}`; // 2022.11.02 15.00.00
//       templateElement.getElementById(
//         "image"
//       ).src = `http://openweathermap.org/img/w/${call.weather[0].icon}.png`;

//       templateElement.getElementById("maxTemp").textContent = `${Math.round(
//         call.main.temp_max
//       )} °C`;
//       templateElement.getElementById("minTemp").textContent = `${Math.round(
//         call.main.temp_min
//       )} °C`;
//       templateElement.getElementById("description").textContent =
//         call.weather[0].description;

//       document.querySelector("main").appendChild(templateElement);
//     });
//   });

// fetch(weatherUrl)
//   .then((response) => response.json())
//   .then((response) =>
//     response.list.forEach((call) => {
//       const templateElement = document.importNode(
//         document.querySelector("template").content,
//         true
//       );
//       templateElement.getElementById("date").textContent = call.dt_txt;
//       templateElement.getElementById(
//         "image"
//       ).src = `http://openweathermap.org/img/wn/${call.weather[0].icon}@2x.png`;
//       templateElement.getElementById("maxTemp").textContent = `${Math.round(
//         call.main.temp_max
//       )} °C`;
//       templateElement.getElementById("minTemp").textContent = `${Math.round(
//         call.main.temp_min
//       )} °C`;
//       templateElement.getElementById("description").textContent =
//         call.weather[0].description;

//       document.querySelector("main").appendChild(templateElement);
//     })
//   );

fetch(weatherUrl)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    response.list.forEach((call) => {
      const templateElement = document.importNode(
        document.querySelector("template").content,
        true
      );
      templateElement.getElementById("date").textContent = call.dt_txt;
      templateElement.getElementById("maxTemp").textContent = `${Math.round(
        call.main.temp_max
      )} °C`;
      templateElement.getElementById("minTemp").textContent = `${Math.round(
        call.main.temp_min
      )} °C`;
      templateElement.getElementById("windSpeed").textContent = `${Math.round(
        call.wind.speed * 3.6
      )} km/h`;
      templateElement.getElementById("description").textContent =
        call.weather[0].description;
      templateElement.getElementById(
        "image"
      ).src = `http://openweathermap.org/img/wn/${call.weather[0].icon}@2x.png`;

      document.querySelector("main").appendChild(templateElement);
    });
  });
