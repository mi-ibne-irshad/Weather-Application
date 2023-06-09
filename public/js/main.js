const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');
const temp_real_val = document.getElementById('temp_real_val');

const getInfo = async () => {
    event.preventDefault();
    let cityVal = cityName.value;

    
    if(cityVal === ""){
        city_name.innerText = `Please write the city name before search`
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3836e171cd68228424d72df993e9e144`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            // temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            if (tempMood == "Sunny") {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              } else if (tempMood == "Rainy") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } else if (tempMood == "Clear") {
                temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempMood == "Haze") {
                temp_status.innerHTML = "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                
              } else {
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              }
              datahide.classList.remove('data_hide');
            console.log('This is response: ', arrData[0].weather[0].main)
        }
        catch(error){
            city_name.innerText = `Please Enter the city Name Properly`
            datahide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);