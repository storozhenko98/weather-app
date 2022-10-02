import { getLocation } from './location-getter';
import {getWeather} from './weather-getter';
import "../styles/styles.css"
const mainView = document.querySelector("#mainView");
const appTitle = document.createElement("div");
appTitle.id = "appTitle";
appTitle.innerHTML = "weather";
mainView.appendChild(appTitle);

//UI + Controller
const view = {
    initializer : function(){
        const initView = document.createElement("div");
        initView.id = "initView";
        const appTitle = document.createElement("div");
        appTitle.id = "appTitle";
        appTitle.innerHTML = "weather";
        const locInput = document.createElement("input");
        locInput.type = "text";
        locInput.placeholder = "Lexington";
        const submitButton = document.createElement("button");
        submitButton.innerHTML = "Search";
        submitButton.addEventListener('click', ()=>{
            if(locInput.value == ""){
                view.createNoEntryView();
                return;
            };
            getLocation(locInput.value).then(res => {
            if (res == undefined || res.length < 1){view.createErrorView()} else {
                console.log(res);
                view.createChoiceView(res)}
        });});
        initView.appendChild(locInput);
        initView.appendChild(submitButton);
        mainView.appendChild(initView);
    },
    createInitView : function(){
        const initView = document.getElementById("initView"); 
        const appTitle = document.createElement("div");
        appTitle.innerHTML = "weather";
        const locInput = document.createElement("input");
        locInput.type = "text";
        locInput.placeholder = "Lexington";
        const submitButton = document.createElement("button");
        submitButton.innerHTML = "Search";
        submitButton.addEventListener('click', ()=>{
            if(locInput.value == ""){
                view.createNoEntryView();
                return;
            };
            getLocation(locInput.value).then(res => {
            if (res == undefined || res.length < 1){view.createErrorView()} else {
                console.log(res);
                view.createChoiceView(res)}
        });});
        initView.appendChild(locInput);
        initView.appendChild(submitButton);

    },
    createChoiceView : function(res){
        console.log(res.length);
        const initView = document.getElementById("initView"); 
        initView.innerHTML = "";
        const choiceOne = document.createElement("button");
        choiceOne.innerHTML = res[0]["name"] + ", " + res[0]["state"] + ", " + res[0]["country"] + ".";
        choiceOne.addEventListener('click', ()=>{getWeather(res[0]["lat"], res[0]["lon"]).then(res=>{
            console.log(res);
            view.createWeatherView(res)})});
        if(res.length>1){
            const choiceTwo = document.createElement("button");
            choiceTwo.innerHTML = res[1]["name"] + ", " + res[1]["state"] + ", " + res[1]["country"] + ".";
            choiceTwo.addEventListener('click', ()=>{getWeather(res[0]["lat"], res[0]["lon"]).then(res=>{view.createWeatherView(res)})});initView.appendChild(choiceTwo);};
        if(res.length>2){
            const choiceThree = document.createElement("button");
            choiceThree.innerHTML = res[2]["name"] + ", " + res[2]["state"] + ", " + res[2]["country"] + ".";
            choiceThree.addEventListener('click', ()=>{getWeather(res[0]["lat"], res[0]["lon"]).then(res=>{view.createWeatherView(res)})});initView.appendChild(choiceThree)};
        const goBack = document.createElement("button");
        goBack.innerHTML = "Return";
        goBack.addEventListener('click', () => {
            initView.innerHTML = "";
            view.createInitView();
        });
        initView.appendChild(choiceOne);
        //initView.appendChild(choiceTwo);
        //initView.appendChild(choiceThree);
        initView.appendChild(goBack);
    },
    createWeatherView : function(res){
        const initView = document.getElementById("initView");
        initView.innerHTML = "";
        const cityName = document.createElement("div");
        cityName.innerHTML = res["name"] + ", " + res["sys"]["country"] + ".";
        const cityTemp = document.createElement("div");
        const tempCelc = Math.round(res["main"]["temp"] - 273.15);
        const tempF = Math.round((res["main"]["temp"]-273.15)*9/5 + 32);
        cityTemp.innerHTML = tempCelc + "C / " + tempF + "F";
        const weatherDescription = document.createElement("div");
        weatherDescription.innerHTML = res["weather"][0]["description"];
        const goBack = document.createElement("button");
        goBack.innerHTML = "Return";
        goBack.addEventListener('click', () => {
            initView.innerHTML = "";
            view.createInitView();
        });
        initView.appendChild(cityName);
        initView.appendChild(cityTemp);
        initView.appendChild(weatherDescription);
        initView.appendChild(goBack);
    },
    createErrorView : () => {
        const initView = document.getElementById("initView");
        initView.innerHTML = "";
        const errorMessage = document.createElement("div");
        errorMessage.innerHTML = "Such a place does not exist.";
        const retry = document.createElement("button");
        retry.innerHTML = "Try Again";
        retry.addEventListener('click', () => {
            initView.innerHTML = "";
            view.createInitView();
        });
        initView.appendChild(errorMessage);
        initView.appendChild(retry);
    }, 
    createNoEntryView : () => {
        const initView = document.getElementById("initView");
        initView.innerHTML = "";
        const errorMessage = document.createElement("div");
        errorMessage.innerHTML = "You must enter a name";
        const retry = document.createElement("button");
        retry.innerHTML = "Try Again";
        retry.addEventListener('click', () => {
            initView.innerHTML = "";
            view.createInitView();
        });
        initView.appendChild(errorMessage);
        initView.appendChild(retry);
    }
};
view.initializer();


