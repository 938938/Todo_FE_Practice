import styled from 'styled-components';
import Login from './components/Login';

function App() {
  return (
    <Main>
      {/* <form>
        <input />
        <Button>추가</Button>
      </form>
      <ul>
        <li>할 일 1</li>
        <li>할 일 2</li>
        <li>할 일 3</li>
      </ul> */}
      <Login />
    </Main>
  );
}

export default App;

const Main = styled.div`
  /* width: 600px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  flex-direction: column; */
`;

// const Button = styled.button`
//   margin: 0 10px;
// `;
