function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Malta
  let maltaElement = document.querySelector("#malta");
  if (maltaElement) {
    let maltaDateElement = maltaElement.querySelector(".date");
    let maltaTimeElement = maltaElement.querySelector(".time");
    let maltaTime = moment().tz("Europe/Malta");

    maltaDateElement.innerHTML = maltaTime.format("Do MMMM YYYY");
    maltaTimeElement.innerHTML = maltaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
    </div>
    <div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
          </div>
        </div>
        <a class="back-arrow" href="/"><</a>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
