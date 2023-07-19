import styled from 'styled-components';
import ICON from '../Down.svg';

const Login = () => {
  return (
    <LoginPage>
      <ImgBox>
        <IconImg src={ICON} alt="icon" />
      </ImgBox>
      <Button>Log in with Google </Button>
      <Button>Log in with GitHub </Button>
      <Button>Log in with Facebook </Button>
      <LoginForm>
        <label htmlFor="email">
          Email <LoginInput id="email" />
        </label>
        <label htmlFor="password">
          Password
          <LoginInput id="password" />
        </label>
        <LoginBtn>Log in</LoginBtn>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  * {
    margin: 5px 0;
  }
`;

const ImgBox = styled.div`
  width: 32px;
  height: 37px;
  position: relative;
  overflow: hidden;
  /* border: 1px solid red; */
  padding: 0 4px;
  box-sizing: border-box;
`;

const IconImg = styled.img`
  width: 150px;
  position: absolute;
`;

const Button = styled.button`
  width: 18rem;
  height: 2rem;
`;

const LoginForm = styled.form`
  width: 18rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginInput = styled.input`
  width: 16rem;
  height: 2rem;
  border: 1px solid gray;
  padding: 0;
`;

const LoginBtn = styled(Button)`
  width: 16rem;
  height: 2rem;
  padding: 0;
`;
