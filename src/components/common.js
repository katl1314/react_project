export default class Common {
    static convertTemper(original) {
        return Math.round(original - 273);
    }

    static setFetch(lat, lon, city, callback) {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        )
            .then((result) => {
                if (!result.ok) {
                    throw new Error(`${result.status}`);
                }
                return result.json();
            })
            .then((data) => callback(city, data))
            .catch((err) => console.error(err));
    }
}
