import { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../firebase";

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  // state -> user info
  const [user, setUser] = useState();

  // register
  const register = async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logout = async () => {
    await auth.logout();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const exports = {
    user,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={exports}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
