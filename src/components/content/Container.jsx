import styled from "styled-components";

function Container(props) {
    return (
        <WeahterForm>
            <div
                style={{
                    position: "relative",
                    top: "75px",
                }}
            >
                <H2>어디의 날씨가 궁금해요?</H2>
            </div>
            <div
                style={{
                    position: "relative",
                    top: "75px",
                    height: "75px",
                    textAlign: "center",
                    lineHeight: "75px",
                }}
            >
                <Input type="text" name="search" id="search" />
                <Button
                    type="button"
                    value="검색"
                    onClick={() => {
                        const searchData =
                            document.getElementById("search").value;
                        props.onClick(searchData);
                    }}
                />
            </div>
        </WeahterForm>
    );
}

const WeahterForm = styled.div`
    width: 100%;
    height: 250px;
    background: lightblue;
`;

const H2 = styled.h2`
    font-size: 35px;
    text-align: center;
    line-height: 90px;
`;

const Input = styled.input`
    width: 400px;
    height: 23px;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid #eeeeee;
    padding: 5px 10px;
`;

const Button = styled.input`
    border: 1px solid rgb(238, 238, 238);
    padding: 5px 10px;
    height: 35px;
    border-radius: 0px 5px 5px 0px;
    top: 1px;
    position: relative;
    cursor: pointer;
`;

export default Container;
