import Common from "../common";
import styled from "styled-components";

export default function ListView({ weather, date }) {
    return (
        <WeatherItem>
            <div>{date}</div>
            <div>현재 기온: {Common.convertTemper(weather.temp)}</div>
            <div>최고 온도: {Common.convertTemper(weather.temp_max)}</div>
            <div>최저 온도: {Common.convertTemper(weather.temp_min)}</div>
        </WeatherItem>
    );
}

const WeatherItem = styled.div`
    border: 1px solid;
    borderradius: 5px;
    margin: 20px;
    padding: 10px;
    width: 15%;
    height: 100px;
    display: inline-block;
`;
