import { Container } from "./style";

function NavBar({ text, handleNavigation, path, action, centered }) {
  return (
    <Container centered={centered}>
      <div>
        <div></div>
        <span>PredialX</span>
      </div>

      {text && (
        <button onClick={() => handleNavigation(path, action)}>{text}</button>
      )}
    </Container>
  );
}
export default NavBar;
