## Today Weather

### 프론트엔드

0. create-react-app(CSR) 추후에 Next.js를 통한 SSR도 해볼 예정

1. Kakao MAP 사용

2. Open Weather Map 사용
   https://api.openweathermap.org/data/2.5/weather?lat=37.5666805&lon=126.9784147&appid=

3. react-router-dom

4. axios (비동기 REST API 데이터 조회)

5. Styled-Component(CSS in JS) 도입

6. 상태 관리 Context API or Redux 사용

### 백엔드 (Spring Boot)

====================================================
react-router-dom 버전이 6이면, Switch에서 Routes으로 대체한다.
&lt;ul>
&lt;li>&lt;NavLink to="/">테스트&lt;/NavLink>&lt;/li>
&lt;li>&lt;NavLink to="/home">테스트1&lt;/NavLink>&lt;/li>
&lt;li>&lt;NavLink to="/asd">테스트2&lt;/NavLink>&lt;/li>
&lt;/ul>
&lt;Routes>
&lt;Route path="/" element={&lt;Header />}>&lt;/Route>
&lt;Route path="/home" element={&lt;Main/>}>&lt;/Route>
&lt;Route path="/asd" element={&lt;Footer/>}>&lt;/Route>
&lt;/Routes>

부모 요소를 배치의 기준으로 삼기 위해서는 부모 요소에 relative를 정의하여야함.
