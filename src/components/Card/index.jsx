import { Container } from "./style";
function Card({ item, handleDelete }) {
  return (
    <Container>
      {item?.id && <span>{item.id}</span>}
      {item?.date && <h2>{item.date}</h2>}
      {item?.report && <p>{item.report}</p>}
      {item?.client_id && <span>{item.client_id}</span>}
      {item?.cooperator_id && <span>{item.cooperator_id}</span>}
      {item?.name && <h2>{item.name}</h2>}
      {item?.email && <span>{item.email}</span>}
      <button onClick={() => handleDelete(item.id)}>X</button>
    </Container>
  );
}

export default Card;
