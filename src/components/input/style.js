import styled  from "styled-components";

export const InputContainer = styled.div`
    width: 100%;    
    max-width: 275px;
    height: 30px;
    display: flex;
    align-itens: center;
    margin-bottom: 50px;
`
export const IconContainer = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;

`
export const CheckContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`

export const InputText = styled.input`
    color: black;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    height: 30px;
    width: 95%;
    margin: auto;
`
export const ErrorText = styled.p`
    color: #FF0000;
    font-size:12px;
    display: flex;
    
    align-items: center;
    margin-top: -25px;
`