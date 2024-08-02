import { createContext, useContext, useState } from 'react';

const UserIDContext = createContext();

export function UserIDProvider({ children }) {
  const [id, setId] = useState('');
  return (
    <UserIDContext.Provider value={{ id, setId }}>
      {children}
    </UserIDContext.Provider>
  );
}

export function useUserID() {
  const context = useContext(UserIDContext);
  if (!context)
    throw new Error('UserIDContext was used outside of UserIDProvider');
  return context;
}
