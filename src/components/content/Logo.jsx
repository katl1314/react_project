import styled from "styled-components";

function Logo() {
    return (
        <h2>
            <A href="/">오늘의 날씨</A>
        </h2>
    );
}

const A = styled.a`
    text-decoration: none;
    color: lightsalmon;
`;

export default Logo;
