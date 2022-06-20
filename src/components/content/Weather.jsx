import React from "react";
import styled from "styled-components";
import store from "../../store/store";
import Container from "./Container";
import WeatherView from "./WeatherView";

function Weather(props) {
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
                weatherData={props.weatherData.list}
                cityData={props.weatherData.city}
            />
        </WrapDiv>
    );
}

const WrapDiv = styled.div`
    width: 100%;
    height: 100%;
`;

export default React.memo(Weather);
