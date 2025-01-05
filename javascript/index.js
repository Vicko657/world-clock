//Los Angeles

function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Malta
  let maltaElement = document.querySelector("#malta");
  let maltaDateElement = maltaElement.querySelector(".date");
  let maltaTimeElement = maltaElement.querySelector(".time");
  let maltaTime = moment().tz("Europe/Malta");

  maltaDateElement.innerHTML = maltaTime.format("Do MMMM YYYY");
  maltaTimeElement.innerHTML = maltaTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
