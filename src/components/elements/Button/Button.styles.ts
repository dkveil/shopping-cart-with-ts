import styled from "styled-components";

export type ButtonWrapperProps = {
    styletype: string;
    padding?: string;
    width?: number;
    height?: number;
    textcolor?: string;
    buttoncolor?: string;
    border?: string;
    hovercolor?: string;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.padding ? props.padding : null};
    height: ${(props) => props.height ? `${props.height}px` : 'fit-content'};
    width: ${(props) => props.width ? `${props.width}px` : 'fit-content'};
    color: ${(props) => props.textcolor ? props.textcolor : 'black'};
    background-color: ${(props) => props.buttoncolor ? props.buttoncolor: 'white'};
    border: ${(props) => props.border ? props.border : '1px solid black'};
    transition: .2s background-color;

    ${props => {
        switch(props.styletype){
            case 'triangle':
                return `
                    border-radius: 100%;
                `
        }
    }}

    &:hover{
        background-color: ${(props) => props.hovercolor ? props.hovercolor : null}
    }

`