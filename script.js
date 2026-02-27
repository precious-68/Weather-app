//http://api.weatherapi.com/v1/current.json?key=ce66f2ffec0f4da191c213441262402&q=Lagos&aqi=no

//let target = 'Lagos';

//const baseUrl = "http://api.weatherapi.com/v1/current.json";
//const apiKey = "ce66f2ffec0f4da191c213441262402";



//const fetchResults = async (targetLocation) => {
//let url = `${baseUrl}?key=${apiKey}&q=${targetLocation}&aqi=no`;
       // const res = await fetch(url);
       // const data = await res.json();
        
        //console.log(data);
//}

//fetchResults(target);

const temperatureField = document.querySelector(" .temp");
const locationField = document.querySelector (" .time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search-area");
        const form = document.querySelector ("form");
        
form.addEventListener('submit', searchForLocation);

let target = "Lagos";

const fetchResults = async (targetLocation) => {
        
        const url = new URL("https://api.weatherapi.com/v1/current.json");
        
        url.searchParams.append("key", "ce66f2ffec0f4da191c213441262402");
        url.searchParams.append("q", targetLocation);
        url.searchParams.append("aqi", "no");
        
        const res = await fetch(url);
        const data = await res.json();
        
        console.log(data);
        
        let locationName = data.location.name;
        let time = data.location.localtime;
        let temp = data.current.temp_c;
        let condition =data.current.condition.text;
        
        updateDetails(locationName, time, temp, condition);
}

function updateDetails(locationName, time, temp, condition){
        
        let splitDate =time.split(' ')[0];
        let splitTime =time.split(' ')[1];
        
        let currentDay = getDayName(new Date(splitDate).getDay());
        
        locationField.innerText = locationName;
        dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
        temperatureField.innerText = temp;
        conditionField.innerText = condition;
};

function searchForLocation(e){
        e.preventDefault();
        
        target = searchField.value;
        
        fetchResults(target);
        
}

fetchResults(target);


function getDayName(number){
        switch (number) {
                case 0:
                return "Sunday";
                case 1:
                return "Monday";
                case 2:
                return "Tuesday";
                case 3:
                return "Wednesday";
                case 4:
                return "Thursday";
                case 5:
                return "Friday";
                case 6:
                return "Saturday";
        }
}