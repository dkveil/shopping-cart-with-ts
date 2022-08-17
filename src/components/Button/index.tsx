import { ButtonWrapper, ButtonWrapperProps } from './Button.styles';

interface IButtonProps extends ButtonWrapperProps{
    children: React.ReactNode;
    onClickHandler: () => void;
}

export default function Button ({
  styletype,
  padding,
  width,
  height,
  textcolor,
  buttoncolor,
  hovercolor,
  border,
  children,
  onClickHandler,
  fontweight,
  texttransform,
  fontsize,
  borderradius
}: IButtonProps)
{
  return (
      <ButtonWrapper
          styletype={styletype}
          padding={padding}
          width={width}
          height={height}
          textcolor={textcolor}
          buttoncolor={buttoncolor}
          hovercolor={hovercolor}
          border={border}
          onClick={onClickHandler}
          fontsize={fontsize}
          fontweight={fontweight}
          texttransform={texttransform}
          borderradius={borderradius}

      >
          {children}
      </ButtonWrapper>
  );
}
