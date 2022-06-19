import { createStore } from "redux";

const mapReducer = (state, action) => {
    if (!state) {
        const city = "seoul";
        return {
            position: {
                city,
            },
            kakao: { ...window.kakao },
            type: null,
        };
    }
    if (action.type === "change") {
        return { ...state, ...action };
    }
    return state;
};

export default createStore(mapReducer, null);
