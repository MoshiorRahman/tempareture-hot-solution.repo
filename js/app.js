const API_KEY = `861c95336c9dac7d862d57d4686530b7`;

const searchTempareture = () => {
    const city = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempareture(data))
}

const setInnerText = (id, Text) => {
    document.getElementById(id).innerText = Text;

}


const displayTempareture = tempareture => {
    setInnerText('city-name', tempareture.name);
    setInnerText('tempareture', tempareture.main.temp);
    setInnerText('temp-condition', tempareture.weather[0].main);
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
    const iconImg = document.getElementById('icon');
    iconImg.setAttribute('src', url)
}