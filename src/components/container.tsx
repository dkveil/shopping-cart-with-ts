import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  ${({theme}) => theme.mq.destkop}{
    width: 960px;
  }
  ${({theme}) => theme.mq.large}{
    width: 1320px;
  }

`

type IContainerProps = {
    children: React.ReactNode;
}

export default function Container ({ children }: IContainerProps) {
  return (
    <Wrapper>
        { children }
    </Wrapper>
  );
}
