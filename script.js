async function getWeather(){

    const city = document.getElementById("cityInput").value;

    const url =
    `https://wttr.in/${city}?format=j1`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        const temp =
        data.current_condition[0].temp_C;

        const humidity =
        data.current_condition[0].humidity;

        const weather =
        data.current_condition[0]
        .weatherDesc[0].value;

        document.getElementById(
            "weatherResult"
        ).innerHTML = `
        <h3>${city}</h3>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${weather}</p>
        `;

    }
    catch(error){

        document.getElementById(
            "weatherResult"
        ).innerHTML =
        "City not found";
    }
}