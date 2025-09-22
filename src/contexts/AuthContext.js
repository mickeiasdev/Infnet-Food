import React, { createContext, useState } from 'react';
import { mockUser } from '../data/mockData';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simula uma chamada de API. Em um ambiente real, você faria uma chamada para o seu backend.
    if (email === mockUser.email && password === 'senha123') {
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
