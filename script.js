const previous = document.getElementById("previous");
const next = document.getElementById("next");
const main = document.querySelector("main");
const list = document.querySelector("ul");

const apiKey = "4bbff4a3c69a9b2c5ec037d55762eb79";
const langage = "fr";
const counter = 40;
const liege = {
  latitude: 50.6333,
  longitude: 5.56667,
};
// https://api.openweathermap.org/data/2.5/forecast?lat=50.6333&lon=5.56667&appid=4bbff4a3c69a9b2c5ec037d55762eb79&cnt=7&lang=fr&units=metric
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${liege.latitude}&lon=${liege.longitude}&appid=${apiKey}&cnt=${counter}&lang=${langage}&units=metric`;

function fetchingDatas() {
  return fetch(weatherUrl).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then((error) => {
        console.log(error);
        throw new Error("Something went wrong - server-side");
      });
    }
  });
}

async function displayDatas() {
  const calls = await fetchingDatas();
  calls.list.forEach((call, index, e) => {
    const templateElement = document.importNode(
      document.querySelector("template").content,
      true
    );
    templateElement.getElementById("date").textContent = `${call.dt_txt}`;
    templateElement.getElementById(
      "image"
    ).src = `http://openweathermap.org/img/w/${call.weather[0].icon}.png`;
    templateElement.getElementById("maxTemp").textContent = `${Math.round(
      call.main.temp_max
    )} °C`;
    templateElement.getElementById("minTemp").textContent = `${Math.round(
      call.main.temp_min
    )} °C`;
    templateElement.getElementById(
      "description"
    ).textContent = `${call.weather[0].description}`;
    templateElement.getElementById("windSpeed").textContent = `${Math.round(
      call.wind.speed * 3.6
    )} km/h`;

    const div = templateElement.getElementById("date").parentElement;
    div.setAttribute("id", `${index}`);

    const listItemCreation = `<li id="${index}">${call.dt_txt.substring(
      5,
      7
    )}/${call.dt_txt.substring(8, 10)} - ${call.dt_txt.substring(
      11,
      13
    )}h</li>`;
    list.innerHTML += listItemCreation;
    const listItem = document.getElementById(`${index}`);

    if (listItem.id != div.id) {
      return;
    }
    main.appendChild(templateElement);
  });
}
displayDatas();

next.addEventListener("click", () => {
  main.scrollLeft += main.clientWidth;
});

previous.addEventListener("click", () => {
  main.scrollLeft -= main.clientWidth;
});

document.addEventListener("click", (e) => {
  const buttonClickedId = e.target.id;
  console.log(buttonClickedId);
});
