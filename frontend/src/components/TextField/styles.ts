import styled from "styled-components";

let height= '45px';
let color = '#777'
let fontSize = '14px'

export const Input = styled.input`
    height: ${height};    
    padding-left: 8px;
    font-size: ${fontSize};
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    
`;
export const Label = styled.label`
    color: ${color};
    font-size: ${fontSize};
`;

export const LabelBox = styled.div`
    width: 90px;
    height: ${height};
    background-color: #CCC;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`