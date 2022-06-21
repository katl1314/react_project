import axios from "axios";

export default class Common {
    // 절대온도 -> 섭씨온도
    static convertTemper(original) {
        return Math.round(original - 273);
    }

    static setWeatherFetch(callback, url, city) {
        // fetch -> axios라이브러리 사용함.
        // HTML METHOD post, get, patch, pull, delete
        // post : 서버에 데이터를 전달하여 새로 추가함.
        // get : 서버의 데이터를 가져옴.
        // patch : 서버의 특정 데이터를 수정함.(일부) => 갱신
        // pull : 서버의 특정 데이터를 수정함.(전체) => 갱신
        // delete : 서버의 특정 데이터를 삭제함 /todos/1 => id가 1인 데이터를 삭제한다.
        axios
            .get(url)
            .then((res) => callback(city, res.data))
            .catch((err) => console.error(err));
        /* fetch(url)
            .then((result) => {
                if (!result.ok) {
                    throw new Error(`${result.status}`);
                }
                return result.json();
            })
            .then((data) => callback(city, data))
            .catch((err) => console.error(err)); */
    }
}
