function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    let city = 'Lagos';
    const apiKey = 'API-KEY';

    fetch(`${baseURL}${city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(
        function(data) {
            const type = data.weather.map(param => param.main);
            document.getElementById('results').innerHTML = type;
        }
    )
}

export { handleSubmit }
