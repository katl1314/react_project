import { useState, useEffect } from "react";
import styled from "styled-components";
import store from "../../store/store";
import Container from "./Container";
import WeatherView from "./WeatherView";

function Weather() {
    // dispatch를 통해 action을 store에 전달하고, state변경 시
    const [weatherData, setWeatherData] = useState([]);
    const [cityData, setCityData] = useState({});
    const setFetch = (city, callback) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        )
            .then((result) => {
                if (!result.ok) {
                    throw new Error(`${result.status}`);
                }
                return result.json();
            })
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    };

    const setFetchCallback = (data) => {
        setWeatherData(data.list);
        setCityData(data.city);
    };

    store.subscribe(() => {
        const { city } = store.getState().position;
        setFetch(city, setFetchCallback);
    });

    // 초기 위치의 날씨 정보 취득 componentDidMount
    useEffect(() => {
        const { city } = store.getState().position;
        setFetch(city, setFetchCallback);
    }, []);

    return (
        <WrapDiv>
            <Container />
            <WeatherView weatherData={weatherData} cityData={cityData} />
        </WrapDiv>
    );
}

const WrapDiv = styled.div`
    width: 100%;
    height: 100%;
`;

export default Weather;
