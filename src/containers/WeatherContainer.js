import { useState, useEffect } from "react";
import Common from "../components/common";
import Weather from "../components/content/Weather";
import store from "../store/store";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const [weatherData, setWeatherData] = useState({
        city: store.getState().city,
        list: [],
    });
    const weatherURL = "https://api.openweathermap.org/data/2.5/forecast";

    const onClick = (searchData) => {
        let places = new window.kakao.maps.services.Places();
        let callback = function (result, status) {
            if (status === "OK") {
                const { x, y } = result[0];
                const lon = Number(x); // 경도
                const lat = Number(y); // 위도

                store.dispatch({
                    city: searchData,
                    position: {
                        lat,
                        lon,
                    },
                    type: "change",
                });
            }
        };
        places.keywordSearch(searchData, callback);
    };

    const setFetchCallback = (city, data) => {
        setWeatherData({ city, list: data.list });
    };

    // 초기 위치의 날씨 정보 취득 componentDidMount
    useEffect(() => {
        // store.subscribe는 componentDidMount에 작성하지 않으면 계속 호출됨.
        store.subscribe(() => {
            const { position, city } = store.getState();
            const { lat, lon } = position;
            const url = `${weatherURL}?lat=${lat}&lon=${lon}&lang=kr&cnt=10&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            Common.setWeatherFetch(setFetchCallback, url, city);
        });

        const { position, city } = store.getState();
        const { lat, lon } = position;
        const url = `${weatherURL}?lat=${lat}&lon=${lon}&lang=kr&cnt=10&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
        Common.setWeatherFetch(setFetchCallback, url, city);
    }, []);
    return <Weather weatherData={weatherData} onClick={onClick} />;
}
