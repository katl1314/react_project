import { useState, useEffect } from "react";
import styled from "styled-components";
import store from "../../store/store";
import Container from "./Container";
import WeatherView from "./WeatherView";

function Weather() {
    // dispatch를 통해 action을 store에 전달하고, state변경 시
    const [weatherData, setWeatherData] = useState({
        city: store.getState().city,
        list: [],
    });
    const setFetch = (lat, lon, city, callback) => {
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
    };

    const setFetchCallback = (city, data) => {
        setWeatherData({ city, list: data.list });
    };

    store.subscribe(() => {
        const { position, city } = store.getState();
        setFetch(position.lat, position.lon, city, setFetchCallback);
    });

    // 초기 위치의 날씨 정보 취득 componentDidMount
    useEffect(() => {
        const { position, city } = store.getState();
        setFetch(position.lat, position.lon, city, setFetchCallback);
    }, []);
    return (
        <WrapDiv>
            <Container
                onClick={(searchData) => {
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
                }}
            />
            <WeatherView
                weatherData={weatherData.list}
                cityData={weatherData.city}
            />
        </WrapDiv>
    );
}

const WrapDiv = styled.div`
    width: 100%;
    height: 100%;
`;

export default Weather;
