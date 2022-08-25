import React from "react";
import Card from "../Card";
import { Container } from "./style";

//order - id, date, report, client_id, cooperator_id
//cooperator - name , id , email, password
//client - name and id

function List({ toRenderList, handleDelete }) {
  console.log(toRenderList);
  return (
    <Container>
      {React.Children.toArray(
        toRenderList.map((item) => (
          <Card item={item} handleDelete={handleDelete}></Card>
        ))
      )}
    </Container>
  );
}

export default List;
