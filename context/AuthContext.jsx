
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem('jwt');
    if (stored) setToken(stored);
  }, []);

  const login = (jwt) => {
    sessionStorage.setItem('jwt', jwt);
    setToken(jwt);
    navigate('/dashboard');
  };

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
