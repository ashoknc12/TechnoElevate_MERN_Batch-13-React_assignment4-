import { useState } from "react";
import LoginContext from "./context/loginContext";
import { router } from "./router/Router";

function App() {
  const [login, setLogin] = useState(false);
  const logout = () => {
    setLogin(false);
  };

  const changeLogin = () => {
    setLogin(true);
  };

  const loginInfo = {
    login: login,
    logout: logout,
    changeLogin: changeLogin,
  };
  return (
    <LoginContext.Provider value={loginInfo}>{router}</LoginContext.Provider>
  );
}

export default App;