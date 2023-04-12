import styled from 'styled-components';

function App() {
  return (
    <Main>
      <form>
        <input />
        <Button>추가</Button>
      </form>
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 600px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 10px;
`;
