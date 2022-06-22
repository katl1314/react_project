import { useState, useEffect } from "react";
import WeatherListView from "./WeatherListView";

function WeatherView(props) {
    const [WeatherItem, setWeatherItem] = useState([]);
    const { weatherData } = props;
    useEffect(() => {
        if (weatherData.length) {
            const items = weatherData.map((d, i) => {
                const { main, dt_txt } = d;
                // map메서드를 이용하여 리스트 생성할 경우 key 어트리뷰트를 설정해야함.
                return (
                    <WeatherListView
                        key={`weather_list_${i}`}
                        weather={main}
                        date={dt_txt}
                    ></WeatherListView>
                );
            });
            setWeatherItem(items);
        }
    }, [weatherData]);
    return <div style={{ margin: "0 auto", width: "70%" }}>{WeatherItem}</div>;
}

export default WeatherView;
