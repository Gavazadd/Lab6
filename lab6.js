const button = document.getElementById('button');
const request = document.getElementById('status');

button.addEventListener('click', () => {
  fetch('https://randomuser.me/api')
  .then((response) => response.json())
  .then((data) => display(data)).catch(error => request.innerText = error);
});

function display(data) {
    information = data['results'][0];

    profile = document.createElement('div');
    profile.setAttribute('id', 'profile');

    let image = document.createElement('img');
    image.src= information['picture']['large'];
    profile.appendChild(image);

    let phone = document.createElement('p');
    phone.innerText = `Phone: ${information['phone']}`;
    profile.appendChild(phone);

    let coords = document.createElement('p');
    coords.innerText = `Coords: ${information['location']['coordinates']['latitude']}, ${information['location']['coordinates']['longitude']}`;
    profile.appendChild(coords);

    let postcode = document.createElement('p');
    postcode.innerText = `Postcode: ${information['location']['postcode']}`;
    profile.appendChild(postcode);

    let country = document.createElement('p')
    country.innerText = `Country: ${information['location']['country']}`;
    profile.appendChild(country);

    document.getElementById('results').appendChild(profile);
    request.innerText = 'Успішно!'
};
