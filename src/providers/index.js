import { CooperatorProvider } from "./Cooperators";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <CooperatorProvider>{children} </CooperatorProvider>;
    </UserProvider>
  );
};
