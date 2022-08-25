import { createContext, useEffect, useState } from "react";
import Api from "../../services/api";
import api from "../../services/api";
import { toast } from "react-toastify";

export const CooperatorContext = createContext({});

export const CooperatorProvider = ({ children }) => {
  const [cooperators, setCooperators] = useState([]);

  useEffect(() => {
    api
      .get("/cooperator")
      .then((response) => {
        setCooperators(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteCooperator = (id) => {
    Api.delete(`/cooperator/${id}`)
      .then(() => {
        const filteredList = cooperators.filter(
          (cooperator) => cooperator.id !== id
        );
        setCooperators(filteredList);
      })
      .catch((error) => toast.error(error.message));
  };

  const handleDeleteCooperator = (id) => {
    api.delete(`/cooperator/${id}`).then((_) => {
      let newCooperators = cooperators.filter((el) => el.id !== id);
      setCooperators(newCooperators);
      toast.success("Cooperador excluído com sucesso");
    });
  };

  return (
    <CooperatorContext.Provider
      value={{
        cooperators,
        deleteCooperator,
        handleDeleteCooperator,
      }}
    >
      {children}
    </CooperatorContext.Provider>
  );
};
