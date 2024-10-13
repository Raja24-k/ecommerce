let cityName=document.querySelector(".Weather-city");
let dateTime=document.querySelector(".Weather-datetime");
let forecast=document.querySelector(".Weather-forecast");
let icons=document.querySelector(".Weather-icons");
let temperature=document.querySelector(".Weather-temperature");
let min=document.querySelector(".Weather-min");
let max=document.querySelector(".Weather-max");

let feellike=document.querySelector(".Weather-feellike");
let humadity=document.querySelector(".Weather-humadity");
let wind=document.querySelector(".Weather-wind");
let persures=document.querySelector(".Weather-persures");

let citysearch=document.querySelector(".Weather-search");


const getCountryname=(code)=>{
    return new Intl.DisplayNames([code],{type:"region"}).of(code);
};
const getdateTime=(dt)=>{
   const curDate=new Date(dt*1000);
    const options={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
      //  second:"numeric"
    };
    const formatter=new Intl.DateTimeFormat("en-US",options);
    console.log(formatter);
    return formatter.format(curDate);

};
let city="Noida";
citysearch.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityName=document.querySelector(".city-name");
    console.log(cityName.value);
    city=cityName.value;
    getWeatherData();
    cityName.value="";
});

const getWeatherData=async()=>{
    const weatherurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=637aea398682f94f93ba8ac751a1d115`;
try{
const res=await fetch(weatherurl);
const data=await res.json();
console.log(data);
const {main,name,weather,wind,sys,dt}=data;

cityName.innerHTML=`${name},${getCountryname(sys.country)}`;

dateTime.innerHTML= getdateTime(dt);
forecast.innerHTML=weather[0].main;
temperature.innerHTML=`${main.temp}&#176`;
min.innerHTML=`Min:${main.temp_min.toFixed()}&#176`;
max.innerHTML=`Max:${main.temp_max.toFixed()}&#189`;
feellike.innerHTML=`${main.feels_like.toFixed(2)}&#189`;
humdaity.innerHTML=`${main.humidity}%`;
wind.innerHTML=`${wind.speed}m/s`;
persures.innerHTML=`${main.pressure}hPa`;


}catch(error){
console.log(error);
}
};

document.body.addEventListener("load",getWeatherData());