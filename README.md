ABOUT THE PROJECT
    - The Project is a simple Weather Forecast that displays the weather base on the selected City.
    - It uses the API (https://openweathermap.org/forecast16#geo16)


BUILD WITH
    - ReactJS with TailwindCSS


PAGES 
    -It has three (3) pages (Landing Page/Login Page, Homepage, Weather Page)
    -It has two (2) miscellaneous pages (404 Page, Loading Page)
    -It utilizes the AUTH0 for authentication
    -It has two (2) protected routes (Home, Weather)


DEPENDENCIES/NPM PACKAGES
    1. "@auth0/auth0-react": "^2.0.0",
    2. "@reduxjs/toolkit": "^1.9.1",
    3. "axios": "^1.2.3",
    4. "react": "^18.2.0",
    5. "react-dom": "^18.2.0",
    6. "react-hook-form": "^7.42.1",
    7. "react-redux": "^8.0.5",
    8. "react-router-dom": "^6.7.0",
    9. "react-scripts": "5.0.1",
    10. "react-spinners": "^0.13.8",
    11. "redux": "^4.2.0",


INSTALLATION
    These are the procedures how you can install and setup the app.

    1. Register and tet a free API Key 
        at https://openweathermap.org/forecast16#geo16
    
    2. Register also  at auth0.com (if necessary), to generate the domain and clientId, to be use to authentication
        https://www.auth0.com

    2. Clone the Repo 
        git clone https://github.com/Jboy2124/weather-forecast.git

    3. Install NPM Packages
        npm install

    4. Enter your API key at .env
        - you need to input all the necessary keys here
            REACT_APP_AUTH0_DOMAIN=
            REACT_APP_AUTH0_CLIENT_ID=

            WEATHER_APP_ID=




