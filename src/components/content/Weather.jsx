import store from "../../store/store";
import Map from "./Map";

function Weather() {
    // dispatch를 통해 action을 store에 전달하고, state변경 시
    store.subscribe(() => {
        const { lon, lat } = store.getState().position;

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        )
            .then((result) => {
                if (!result.ok) {
                    throw new Error(`${result.status}`);
                }
                result.json();
            })
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    });

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Map />
        </div>
    );
}

export default Weather;
