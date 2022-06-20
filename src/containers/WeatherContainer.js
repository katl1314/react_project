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

    const setFetchCallback = (city, data) => {
        setWeatherData({ city, list: data.list });
    };

    // 초기 위치의 날씨 정보 취득 componentDidMount
    useEffect(() => {
        // store.subscribe는 componentDidMount에 작성하지 않으면 계속 호출됨.
        store.subscribe(() => {
            const { position, city } = store.getState();
            Common.setFetch(position.lat, position.lon, city, setFetchCallback);
        });

        const { position, city } = store.getState();
        Common.setFetch(position.lat, position.lon, city, setFetchCallback);
    }, []);
    return <Weather weatherData={weatherData} />;
}
