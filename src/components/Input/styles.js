import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color:rgb(79, 79, 97);

    display: flex;
    align-item: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
   

    input {
        width: 100%;
        height: 75px;
        background-color:rgb(28, 28, 70);
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;

        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
    }
`