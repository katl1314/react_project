import React, { useEffect } from "react";
import store from "../../store/store";

function Map() {
    const { position, kakao } = store.getState();

    useEffect(() => {
        // 초기 지도 위치 세팅
        let container = document.getElementById("map");
        const center = new kakao.maps.LatLng(position.lat, position.lon);

        let options = {
            center,
            level: 3,
        };

        let map = new kakao.maps.Map(container, options);

        kakao.maps.event.addListener(map, "dragend", () => {
            const { La: lon, Ma: lat } = map.getCenter();
            store.dispatch({
                type: "drag",
                position: {
                    lat,
                    lon,
                },
            });
        });
    }, []);
    return <div id="map" style={{ width: "100%", height: "800px" }}></div>;
}

export default Map;
