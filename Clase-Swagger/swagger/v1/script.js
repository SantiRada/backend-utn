const endpoint = document.getElementById('endpoint');
const response = document.getElementById('response');

async function GetRecetas () {
    const data = await fetch(endpoint.textContent);
    const res = await data.json();

    response.textContent = JSON.stringify(res);
}