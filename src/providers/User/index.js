import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import Api from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@PredialX:user")) || {}
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@PredialX:token")) || {}
  );
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (token && Object.entries(user).length > 0) {
      Api.get(`/cooperator/${user.id}`)
        .then(() => setIsAuth(true))
        .catch(() => {
          setIsAuth(false);
        });
    } else {
      setIsAuth(false);
    }
  }, []);

  const history = useHistory();

  const login = (data) => {
    Api.post("/cooperator/login", data)
      .then((response) => {
        setUser(response.data.user);
        setToken(response.data.token);
        localStorage.setItem(
          "@PredialX:user",
          JSON.stringify(response.data.user)
        );
        localStorage.setItem(
          "@PredialX:token",
          JSON.stringify(response.data.token)
        );
        history.push(`/`);
        setIsAuth(true);
        toast.success("Login efetuado com sucesso");
      })
      .catch(() => toast.error("Algo deu errado, tente novamente"));
  };

  const logout = () => {
    setUser({});
    setToken("");
    setIsAuth(false);
    localStorage.clear();
    history.push("/login");
  };

  return (
    <UserContext.Provider value={{ user, token, isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
