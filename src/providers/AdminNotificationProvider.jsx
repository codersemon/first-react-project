// dependecies
import { useState } from "react";
import AdminNotificationContext from "../context/AdminNotificationContext";

// eslint-disable-next-line react/prop-types
const AdminNotificationProvider = ({ children }) => {
  // notification state declare
  const [counter, setCounter] = useState(0);

  return (
    <AdminNotificationContext.Provider value={{ counter, setCounter }}>
      {children}
    </AdminNotificationContext.Provider>
  );
};

export default AdminNotificationProvider;
