import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {logout,login} from "../stores/auth"

const Header = () => {

  const dispatch = useDispatch()
const {user} = useSelector(state=> state.auth)

  const handleLogin = (user) => {
   dispatch(login(user)) ;
  };

  const handleLogout = () => {
    dispatch(logout(false));
  };

  return (
    <div>
      <h2>Tuçe's ToDo App</h2>
      {!user && (
        <nav>
          <button
            onClick={() => {
              handleLogin({ id: 1, username: "Tuçe" });
            }}
          >
            Tuçe olarak giriş yap
          </button>
          <button
            onClick={() => {
              handleLogin({ id: 2, username: "Tuğçe" });
            }}
          >
            Tuğçe olarak giriş yap
          </button>
        </nav>
      )}

      {user && (
        <nav>
          Hoş Geldin, {user.username}
          <button onClick={handleLogout}>Çıkış Yap</button>
        </nav>
      )}
    </div>
  );
};

export default Header;
