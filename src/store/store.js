import { createStore } from "redux";

const mapReducer = (state, action) => {
    if (!state) {
        const lat = 37.3591784;
        const lon = 127.1048319;
        return {
            position: {
                lat,
                lon,
            },
            kakao: { ...window.kakao },
            type: null,
        };
    }
    if (action.type === "drag") {
        return { ...state, ...action };
    }
    return state;
};

export default createStore(mapReducer, null);
