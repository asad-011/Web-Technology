function checkWeather() {
  var pincode = document.getElementById("pincode").value;
  var apiKey = "";
  var url = `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},IN&units=metric&appid=${apiKey}`;

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, true);

  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        const data = JSON.parse(this.responseText);
        const city = data.name;
        const temp = data.main.temp;

        document.getElementById(
          "result"
        ).innerHTML = `<b>City:</b> ${city} <br> <b>Temperature:</b> ${temp} °C`;
      } else {
        document.getElementById(
          "result"
        ).innerHTML = `<span style="color:rgb(249, 52, 52); background-color: rgb(240, 232, 232);">
     Error: Invalid Pincode or API issue
   </span>`;
      }
    }
  };
  xmlHttp.send();
}

