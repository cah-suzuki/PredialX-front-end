import { Container } from "./style";
import Header from "../../components/Header";
import Cooperators from "../../components/Cooperators";

function Home() {
  return (
    <Container>
      <span>
        <Header></Header>
      </span>
      <Cooperators></Cooperators>
    </Container>
  );
}

export default Home;
