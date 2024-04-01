let city; // to be able to access in the displayData method




async function getWeather(){
    // let city = "mumbai"
    city = document.getElementById('mycity').value;
    let key = 'bee820d6f404f04fb49fc8c5557fd9d5';
    let wurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
   try{
    let response = await fetch(wurl)
    let data =  await  response.json();
    displayData(data);
   }
   catch(error){
        console.log(" an error occurred while fetching data, please check city name again");
        //  inline style and no bootstrap
        // document.getElementById('mydiv').innerHTML = "<span style='color:red'> An error occurred while fetching data, please check city name again </span>"
        // bootstrap
        document.getElementById('weather-info').innerHTML = "<span class='text-danger'> An error occurred while fetching data, please check city name again </span>"
   }        


}


//************* promises and catch
// function getWeather(){
//     // let city = "mumbai"
//     city = document.getElementById('mycity').value;
//     let key = 'd72729578543cfc435344f99b226b1c9';
//     let wurl = `https://api.openweathermap.org/data/2.5/weather?q=nnnnnnn&appid=${key}&units=metric`
//     fetch(wurl)
//     .then( (resp) => { return resp.json()})
//     .catch( console.log(" error!!"))
//     .then( (data) => {
//                 displayData(data);          
//     })
//     .catch( console.log(" another error!!"))


// }


function displayData(data) {debugger;
        console.log(data);
        let currentTemp = data.main['temp']
        console.log(data.main['temp']);
        document.querySelector('.temperature').innerHTML = currentTemp+"&degC";
        let minTemp = data.main['temp_min'];
        console.log(data.main['temp_min']);
        document.querySelector('.min-temp').innerHTML = minTemp;
        let maxTemp = data.main['temp_max'];
        console.log(data.main['temp_max']);
        document.querySelector('.max-temp').innerHTML = maxTemp;
        let windSpeed = data.wind.speed;
        console.log(data.wind.speed);
        document.querySelector('.win-speed').innerHTML = windSpeed;
        let weatherActual = data.weather[0].main;
        console.log(data.weather[0].main);
        let icon = data.weather[0].icon;
        document.querySelector('.icon').src = `http://openweathermap.org/img/w/${icon}.png`;
        let description = data.weather[0].description;
        document.querySelector('.description').innerHTML = description;

            // document.getElementById('weather-info').innerHTML = ` <h4> Weather in city --${city} is ${weatherActual} </h4> <br>
            //     Current temp is ${currentTemp}. Max Temp is ${maxTemp} . Min Temp is ${minTemp} . <br>
            //     WindSpeed is ${windSpeed}
            //     <img src='http://openweathermap.org/img/w/${imgicon}.png' alt='icon here' />
            // `;              
     
    }



    async function fetchData(){
        const data = fetch('https://api.example.com/data');
        return (await data).json();
    }

    async function fetchData(){
        const data = await fetch('https://api.example.com/data');
        return (data).json();
    }