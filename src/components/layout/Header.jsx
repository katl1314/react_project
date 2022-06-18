import styled from "styled-components";
import Logo from "../content/Logo";
import Gnb from "./Gnb";

function Header(props) {
    return (
        <WrapHeader>
            <MyHeader>
                <Logo />
                <Gnb />
            </MyHeader>
        </WrapHeader>
    );
}

const WrapHeader = styled.div`
    height: 75px;
    min-width: 100%;
    z-index: 9999;
    background: #fff;
    position: fixed;
    line-height: 75px;
    border-bottom: 1px solid #efefef;
`;

const MyHeader = styled.div`
    margin: 0 auto;
    width: 1100px;
    position: relative;
`;
export default Header;
