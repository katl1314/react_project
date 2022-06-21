import React from "react";
import styled from "styled-components";
import Container from "./Container";
import WeatherView from "./WeatherView";

function Weather(props) {
    return (
        <WrapDiv>
            <Container onClick={props.onClick} />
            <H3 style={{ textAlign: "center" }}>
                {props.weatherData.city}의 날씨 정보
            </H3>
            <WeatherView weatherData={props.weatherData.list} />
        </WrapDiv>
    );
}

const WrapDiv = styled.div`
    width: 100%;
    height: 100%;
    textalign: center;
    margin: 0 auto;
`;

const H3 = styled.h3`
    font-size: 30px;
    padding: 20px;
`;

export default React.memo(Weather);
