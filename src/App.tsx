import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ToDoList from "./components/ToDoList";
const GlobbalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
  }
`;

function App() {
  return (
    <>
      <GlobbalStyle />
      <ToDoList />
    </>
  );
}

export default App;
