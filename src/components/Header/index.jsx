import { Container } from "./style";
import { Link } from "react-router-dom";
function Header({ name, text }) {
  return (
    <Container>
      <div>
        <h2>Olá, {name}</h2>
        {text && <span>{text}</span>}
      </div>
      <div>
        {" "}
        <Link to="/cooperators">Cooperadores</Link>
        <Link to="/os">O.S</Link>
        <Link to="/clientes">Clientes</Link>
      </div>
    </Container>
  );
}

export default Header;
