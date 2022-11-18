import { createContext, useContext, useEffect, useState } from "react";
import { db, addDoc, collection, serverTimestamp } from "../firebase";

const ProfileContext = createContext();

const useAuth = () => {
  return useContext(ProfileContext);
};

const ProfileProvider = ({ children }) => {
  // CRUD - REST API
  // BACKEND === API
  // FRONTEND (REACT) => BACKEND (FIREBASE API) => DB

  //GET

  // POST
  const addProfile = async (profile) => {
    if (!profile.userId) {
      throw new Error("User id is mandatory");
    }

    // --> firebase --> add...
    await addDoc(collection(db, "profiles"), {
      ...profile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  };
  // UPDATE

  // DELETE

  const exports = {};

  return (
    <ProfileContext.Provider value={exports}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
export { useAuth };
