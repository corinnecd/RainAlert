// Villes françaises pour l'autocomplétion
const frenchCities = [
    'Paris', 'Marseille', 'Lyon', 'Nice', 'Toulouse', 'Nantes', 'Montpellier', 'Strasbourg',
    'Bordeaux', 'Lille', 'Corse', 'Ajaccio','Beauvais', 'Rennes', 'Reims', 'Toulon', 'Saint-Étienne', 'Le Havre', 'Grenoble',
    'Dijon', 'Angers', 'Villeurbanne', 'Saint-Denis', 'Nîmes', 'Aix-en-Provence', 'Clermont-Ferrand',
    'Le Mans', 'Brest', 'Tours', 'Limoges', 'Amiens', 'Perpignan', 'Metz', 'Besançon', 'Orléans',
    'Mulhouse', 'Rouen', 'Caen', 'Nancy', 'Saint-Paul', 'Argenteuil', 'Roubaix', 'Tourcoing',
    'Montreuil', 'Avignon', 'Créteil', 'Poitiers', 'Fort-de-France', 'Courbevoie', 'Versailles',
    'Colombes', 'Aulnay-sous-Bois', 'Nanterre', 'Saint-Pierre', 'Rueil-Malmaison', 'Pau',
    'Champigny-sur-Marne', 'Antibes', 'La Rochelle', 'Calais', 'Cannes', 'Boulogne-Billancourt'
];

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const autocompleteList = document.getElementById('autocompleteList');
const weatherContent = document.getElementById('weatherContent');

// Configuration de l'API météo (OpenWeatherMap)
const API_KEY = '0607fac85b83425a2b00ca14f6621333';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Autocomplétion
cityInput.addEventListener('input', handleAutocomplete);
cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

searchBtn.addEventListener('click', searchWeather);

function handleAutocomplete() {
    const query = cityInput.value.toLowerCase();
    autocompleteList.innerHTML = '';
    
    if (query.length < 2) {
        autocompleteList.style.display = 'none';
        return;
    }

    // Filtrer d'abord par les villes qui commencent par la requête, puis par celles qui la contiennent
    const startsWithMatches = frenchCities.filter(city => 
        city.toLowerCase().startsWith(query)
    );
    
    const containsMatches = frenchCities.filter(city => 
        city.toLowerCase().includes(query) && !city.toLowerCase().startsWith(query)
    );
    
    const matches = [...startsWithMatches, ...containsMatches].slice(0, 5);

    if (matches.length > 0) {
        matches.forEach(city => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = city;
            item.addEventListener('click', () => {
                cityInput.value = city;
                autocompleteList.style.display = 'none';
                searchWeather();
            });
            autocompleteList.appendChild(item);
        });
        autocompleteList.style.display = 'block';
    } else {
        autocompleteList.style.display = 'none';
    }
}

// Cacher l'autocomplétion quand on clique ailleurs
document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
        autocompleteList.style.display = 'none';
    }
});
//rajouter api gouv 
async function searchWeather() {
    const city = cityInput.value.trim();
    if (!city) return;

    // liste des villes françaises
    let isFrenchCity = frenchCities.some(frenchCity => 
        frenchCity.toLowerCase() === city.toLowerCase()
    );

    if (!isFrenchCity) {
        showError(`"${city}" n'est pas une ville française reconnue. Veuillez choisir une ville française dans la liste.`);
        return;
    }

    autocompleteList.style.display = 'none';
    showLoader();

    try {
        // Simulation d'une requête API 
        const weatherData = await fetchRealWeatherData(city);
        displayWeather(weatherData);
    } catch (error) {
        showError('Erreur lors de la récupération des données météo. Veuillez réessayer.');
    }
}

function showLoader() {
    weatherContent.innerHTML = '<div class="loader"></div>';
}

function showError(message) {
    weatherContent.innerHTML = `<div class="error">${message}</div>`;
}

// Fonctions utilitaires pour créer les éléments
function createElement(tag, className, content = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
}

function createWeatherCard(type, icon, label, value) {
    const card = createElement('div', `detail-card ${type}`);
    const info = createElement('div', 'detail-info');
    const iconDiv = createElement('div', 'detail-icon', icon);
    const dataDiv = createElement('div');
    const labelDiv = createElement('div', 'detail-label', label);
    const valueDiv = createElement('div', 'detail-value', value);
    
    dataDiv.appendChild(labelDiv);
    dataDiv.appendChild(valueDiv);
    info.appendChild(iconDiv);
    info.appendChild(dataDiv);
    card.appendChild(info);
    
    return card;
}

function displayWeather(data) {
    //arrière-plan
    document.body.className = data.background;
    
    // Vider le contenu
    weatherContent.innerHTML = '';
    
    //éléments principaux
    const cityName = createElement('div', 'city-name', data.city);
    const weatherIcon = createElement('div', 'weather-icon', data.icon);
    const temperature = createElement('div', 'temperature', `${data.temperature}°C`);
    const condition = createElement('div', 'condition', data.condition);
    
    // détails météo
    const weatherDetails = createElement('div', 'weather-details');
    
    //les cartes météo
    const cloudsCard = createWeatherCard('clouds', '☁️', 'Nuages', `${data.humidity}%`);
    const humidityCard = createWeatherCard('humidity', '💧', 'Humidité', `${data.humidity}%`);
    const windCard = createWeatherCard('wind', '💨', 'Vent', `${data.windSpeed} m/s`);
    
    weatherDetails.appendChild(cloudsCard);
    weatherDetails.appendChild(humidityCard);
    weatherDetails.appendChild(windCard);
    
    //boutons d'action
    const actionButtons = createElement('div', 'action-buttons');
    const prevBtn = createElement('button', 'btn btn-primary', 'Prévisions');
    const mapBtn = createElement('button', 'btn btn-secondary', 'Cartes');
    
    actionButtons.appendChild(prevBtn);
    actionButtons.appendChild(mapBtn);
    
    //tous les éléments
    weatherContent.appendChild(cityName);
    weatherContent.appendChild(weatherIcon);
    weatherContent.appendChild(temperature);
    weatherContent.appendChild(condition);
    weatherContent.appendChild(weatherDetails);
    weatherContent.appendChild(actionButtons);
}

// fonction pour l'API:
async function fetchRealWeatherData(city) {

    let url = `${API_URL}?q=${city},FR&appid=${API_KEY}&units=metric&lang=fr`;
    try {
      
        let response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Ville non trouvée');
    }
    
    let data = await response.json();
    
    return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].description,
        icon: getWeatherIcon(data.weather[0].main),
        background: getBackgroundClass(data.weather[0].main),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed.toFixed(1),
        pressure: data.main.pressure
    };

    } catch (error) {
      console.error(error);  
    }   
}

function getWeatherIcon(condition) {
    let icons = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Thunderstorm': '⛈️',
        'Snow': '❄️',
        'Mist': '🌫️'
    };
    return icons[condition] || '🌤️';
}

function getBackgroundClass(condition) {
    let backgrounds = {
        'Clear': 'sunny',
        'Clouds': 'cloudy',
        'Rain': 'rainy',
        'Thunderstorm': 'stormy',
        'Snow': 'clear'
    };
    return backgrounds[condition] || 'clear';
}