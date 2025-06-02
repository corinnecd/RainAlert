# RainAlert

🌤️ Application Météo France
L’application RainAlert est une Application météo moderne, responsive, dédiée aux villes françaises exclusivement, avec une interface élégante inspirée des applications mobiles natives.

<!-- 📱 Aperçu -->

L'application offre une interface utilisateur moderne avec :
• Un Design glassmorphism avec effets de flou
• Autocomplétion intelligente des villes françaises
• Affichage temps réel des données météorologiques des villes françaises
• Une Interface responsive adaptée mobile et desktop
•

<!-- ✨ Fonctionnalités -->

🔍 Recherche Intelligente
• Autocomplétion dynamique : Suggestions de villes en temps réel
• Navigation clavier : Flèches haut/bas, Entrée, Échap
• Validation stricte : Seules les villes françaises sont acceptées

<!-- 🌡️ Affichage Météo -->

• Température actuelle avec icône météo officielle
• Description météo traduite en français
• Détails complets :
o Pourcentage de nuages
o Taux d'humidité
o Vitesse du vent

<!-- 🎨 Interface Utilisateur -->

• Design moderne avec coins arrondis et ombres
• Cartes colorées pour les détails météo
• Animations fluides et transitions CSS
• Loader animé pendant le chargement
• Gestion d'erreurs avec messages explicites

<!-- 🛠️ Technologies Utilisées -->

Frontend
• HTML5 : Structure sémantique
• CSS3 :
o Flexbox et Grid Layout
o Animations et transitions
o Responsive design
o Glassmorphism effects
• JavaScript :
o Async/Await pour les API
o Event Listeners
o DOM Manipulation
o Gestion d'état

<!-- API et Ressources -->

• OpenWeatherMap API : Données météorologiques
• Font Awesome : Icônes vectorielles
• Google Fonts : Typographie système

<!-- Liens API -->

● API météo : https://openweathermap.org/current
● API villes françaises (bonus autocomplétion) : https://geo.api.gouv.fr/decoupage-administratif/communes

📂 Structure du Code
HTML Structure

<div class="container">
  ├── <div class="search-section">          <!-- Barre de recherche -->
  ├── <div class="welcome-screen">           <!-- Écran d'accueil -->
  ├── <div class="loader">                   <!-- Animation de chargement -->
  ├── <div class="error">                    <!-- Messages d'erreur -->
  ├── <div class="weather-display">          <!-- Affichage météo principal -->
  └── <div class="bottom-buttons">           <!-- Boutons de navigation -->
</div>

<!-- CSS Architecture -->

/_ Reset et Base _/

- { margin: 0; padding: 0; box-sizing: border-box; }

<!-- /* Layout Principal */ -->

.container { /_ Conteneur glassmorphism _/ }
.search-section { /_ Zone de recherche _/ }
.weather-display { /_ Affichage données météo _/ }

<!-- /* Composants */ -->

.weather-icon-container { /_ Cercle icône météo _/ }
.weather-details { /_ Grid des détails _/ }
.detail-card { /_ Cartes colorées individuelles _/ }

/_ États et Animations _/
.loader { /_ Spinner de chargement _/ }
@keyframes spin { /_ Animation rotation _/ }

<!-- /* Responsive */ -->

@media (max-width: 480px) { /_ Adaptations mobile _/ }
JavaScript Modules
🔧 Configuration
const cleApi = '0607fac85b83425a2b00ca14f6621333';
const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const villesFrancaises = [...];

<!-- // Base de données des villes -->

🔍 Système d'Autocomplétion
// Gestion de la saisie utilisateur
champVille.addEventListener('input', function() {
// Filtrage en temps réel des villes
// Affichage des suggestions
});

<!-- // Navigation clavier -->

champVille.addEventListener('keydown', function(e) {
// Gestion flèches haut/bas, Entrée, Échap
});

<!-- 🌐 Gestion API -->

async function rechercherMeteo(ville) {
// Validation ville française
// Appel API OpenWeatherMap
// Traitement des erreurs
// Affichage des résultats
}

<!-- 🎯 Fonctions d'Affichage -->

function afficherDonneesMeteo(donnees) {
// Mise à jour du DOM
// Traduction descriptions météo
// Calculs et conversions d'unités
}

<!-- 🚀 Installation et Configuration -->

1. Prérequis
   • Navigateur web moderne (Chrome, Firefox, Safari, Edge)
   • Connexion internet pour l'API météo
   • Clé API OpenWeatherMap
2. Obtenir une Clé API
3. Créer un compte sur OpenWeatherMap
4. Générer une clé API gratuite
5. Remplacer la clé dans le code :
   const cleApi = 'VOTRE_CLE_API_ICI';
6. Lancement
7. Télécharger le fichier index.html
8. Ouvrir le fichier dans un navigateur
9. L'application se charge automatiquement avec Nice
   🎮 Guide d'Utilisation
   Recherche d'une Ville
10. Cliquer dans la barre de recherche
11. Taper le nom d'une ville française
12. Sélectionner une suggestion ou appuyer sur Entrée
13. Consulter les données météo affichées
    Navigation Clavier
    • ↑ ↓ : Naviguer dans les suggestions
    • Entrée : Valider la sélection
    • Échap : Fermer les suggestions

<!-- Données Affichées -->

• Température : En degrés Celsius
• Description : Conditions météo traduites
• Nuages : Pourcentage de couverture nuageuse
• Humidité : Pourcentage d'humidité relative
• Vent : Vitesse en mètres par seconde

<!-- 🏗️ Architecture Technique -->

Flux de Données
Utilisateur → Saisie → Validation → API → Traitement → Affichage
↑ ↓
└── Feedback (erreurs, chargement) ←――――――――――――――――――――――┘

<!-- Gestion d'État -->

// États de l'application

- ecranBienvenue : Affichage initial
- chargement : Pendant l'appel API
- affichageMeteo : Données météo visibles
- erreur : Messages d'erreur temporaires
  Performance
  • Lazy Loading : Chargement API à la demande
  • Debouncing : Optimisation autocomplétion
  • Cache navigateur : Ressources statiques
  • Responsive Images : Icônes météo adaptatives

<!-- 🎨 Personnalisation -->

Couleurs et Thèmes
/_ Variables CSS personnalisables _/
:root {
--primary-color: #3b82f6;
--secondary-color: #8b5cf6;
--accent-color: #ff758c;
--background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

<!-- // Ajouter des villes dans le tableau -->

const villesFrancaises = [
'Paris', 'Marseille', 'Lyon',
'NouvelleVille', // Ajouter ici
// ...
].sort();

<!-- 🔧 API Reference -->

OpenWeatherMap Endpoints
GET https://api.openweathermap.org/data/2.5/weather

<!-- Parametres: -->

- q: {city},FR (ville + code pays)
- appid: {API_key}
- units: metric (unités métriques)
- lang: fr (langue française)
  <!-- Réponse API Type -->
  {
  "name": "Nice",
  "main": {
  "temp": 22.5,
  "humidity": 65
  },
  "weather": [{
  "description": "few clouds",
  "icon": "02d"
  }],
  "wind": {
  "speed": 3.2
  },
  "clouds": {
  "all": 20
  }
  }
  <!-- 📱 Responsive Design -->
  Breakpoints
  /_ Mobile First Approach _/
  Base: 320px+ (smartphones)
  Medium: 768px+ (tablettes)
  Large: 1024px+ (desktop)

<!-- /* Points de rupture critiques */ -->

@media (max-width: 480px) {
/_ Adaptations smartphones _/
.weather-details { grid-template-columns: 1fr; }
}

<!-- Adaptations Mobiles -->

• Grid Layout : 3 colonnes → 1 colonne
• Tailles de police : Réduction proportionnelle
• Espacement : Padding adapté aux écrans tactiles
• Boutons : Zone de clic augmentée (44px minimum)

<!-- 🧪 Tests et Debugging -->

Tests Fonctionnels
// Cas de tests recommandés
✅ Recherche ville valide
✅ Recherche ville invalide  
✅ Navigation clavier autocomplétion
✅ Gestion erreurs réseau
✅ Responsive design multi-devices
✅ Performance chargement

<!-- Debug Console -->

// Logs utiles pour le debugging
console.log('Ville recherchée:', ville);
console.log('Réponse API:', donnees);
console.log('Erreur rencontrée:', error);

<!-- 🔮 Évolutions Possibles -->

Fonctionnalités Avancées
• Prévisions 7 jours : Extension API
• Géolocalisation : Détection position utilisateur
• Favoris : Sauvegarde villes préférées
• Notifications : Alertes météo push
• Mode sombre : Thème alternatif
• PWA : Installation en application native

Améliorations Techniques
• Service Worker : Cache offline
• IndexedDB : Stockage local des données
• Web Workers : Traitement arrière-plan
• Chart.js : Graphiques de tendances

<!-- •	📄 Licence -->

Libre d'utilisation, modification et distribution.
Application météo moderne, responsive et accessible pour toutes les villes de France.


<!-- DONNEES METEO JSON -->
{
    "coord": {
        "lon": 2.3,
        "lat": 49.9
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "partiellement nuageux",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 18.47,
        "feels_like": 18.2,
        "temp_min": 17.55,
        "temp_max": 18.47,
        "pressure": 1018,
        "humidity": 70,
        "sea_level": 1018,
        "grnd_level": 1007
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.57,
        "deg": 273,
        "gust": 5.56
    },
    "clouds": {
        "all": 37
    },
    "dt": 1748856429,
    "sys": {
        "type": 2,
        "id": 2011713,
        "country": "FR",
        "sunrise": 1748835993,
        "sunset": 1748893884
    },
    "timezone": 7200,
    "id": 3037854,
    "name": "Amiens",
    "cod": 200
}