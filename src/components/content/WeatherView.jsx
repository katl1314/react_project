import { useState, useEffect } from "react";
import styled from "styled-components";
import Common from "../common";

function WeatherView(props) {
    const [WeatherItem, setWeatherItem] = useState([]);
    const { weatherData, cityData } = props;
    useEffect(() => {
        if (weatherData.length) {
            const items = weatherData.map((d, i) => {
                const { main, dt_txt } = d;
                return (
                    <List key={`weather_list_${i}`}>
                        <div>{dt_txt}</div>
                        <div>현재 기온: {Common.convertTemper(main.temp)}</div>
                        <div>
                            체감 온도: {Common.convertTemper(main.feels_like)}
                        </div>
                        <div>
                            최고 온도: {Common.convertTemper(main.temp_max)}
                        </div>
                        <div>
                            최저 온도: {Common.convertTemper(main.temp_min)}
                        </div>
                    </List>
                );
            });
            setWeatherItem(items);
        }
    }, [props]);
    return (
        <div
            style={{
                textAlign: "center",
                width: "90%",
                margin: "0 auto",
            }}
        >
            <H3>{cityData}의 날씨 정보</H3>
            {WeatherItem}
        </div>
    );
}

const List = styled.div`
    border: 1px solid;
    borderradius: 5px;
    margin: 20px;
    padding: 10px;
    width: 15%;
    height: 200px;
    display: inline-block;
`;

const H3 = styled.h3`
    font-size: 30px;
    padding: 20px;
`;

export default WeatherView;
