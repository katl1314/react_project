import { useState, useEffect } from "react";
import styled from "styled-components";
import Content from "../content/Content";

function Main(props) {
    return (
        <WrapContent>
            <Content />
        </WrapContent>
    );
}

const WrapContent = styled.div`
    height: 100%;
    width: 100%;
`;
export default Main;
