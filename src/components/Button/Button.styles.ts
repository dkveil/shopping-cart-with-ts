import styled from "styled-components";

export type ButtonWrapperProps = {
    styletype: string;
    padding?: string;
    width?: string;
    height?: string;
    textcolor?: string;
    buttoncolor?: string;
    border?: string;
    borderradius?: string;
    hovercolor?: string;
    fontweight?: string;
    texttransform?: string;
    fontsize?: string;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.padding ? props.padding : null};
    height: ${(props) => props.height ? props.height : 'fit-content'};
    width: ${(props) => props.width ? props.width : 'fit-content'};
    color: ${(props) => props.textcolor ? props.textcolor : 'black'};
    background-color: ${(props) => props.buttoncolor ? props.buttoncolor: 'white'};
    border: ${(props) => props.border ? props.border : '1px solid black'};
    transition: .2s background-color;
    cursor: pointer;
    font-size: ${(props) => props.fontsize ? props.fontsize : null};;
    text-transform: ${(props) => props.texttransform ? props.texttransform : null};
    font-weight: ${(props) => props.fontweight ? props.fontweight : null};

    ${props => {
        switch(props.styletype){
            case 'triangle':
                return `
                    border-radius: 100%;
                `
            case 'square':
                return `
                    border-radius: ${props.borderradius ? props.borderradius : null};
                `
        }
    }}

    &:hover{
        background-color: ${(props) => props.hovercolor ? props.hovercolor : null}
    }

`