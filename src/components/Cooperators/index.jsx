import { Container } from "./style";
import { useContext } from "react";
import { CooperatorContext } from "../../providers/Cooperators";
import List from "../../components/List";

function Cooperators() {
  const { handleDeleteCooperator, cooperators } = useContext(CooperatorContext);

  return (
    <Container>
      <aside>
        <h3>pesquisar</h3>
      </aside>
      <List
        toRenderList={cooperators}
        handleDelete={handleDeleteCooperator}
      ></List>
    </Container>
  );
}

export default Cooperators;
