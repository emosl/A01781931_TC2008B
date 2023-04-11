const response = await fetch('http://127.0.0.1:5001/api/hello', {
    method: "GET"

})

if(response.ok)
{
    const message = await response.text()

    console.log(message)

    const resultDiv = document.getElementById('response-placeholder')
    resultDiv.innerHTML = message
}