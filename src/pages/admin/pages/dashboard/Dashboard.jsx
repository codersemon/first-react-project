// dependencies
import { useContext } from "react";
import "./Dashboard.scss";
import AdminNotificationContext from "../../../../context/AdminNotificationContext";

const Dashboard = () => {
  const { counter, setCounter } = useContext(AdminNotificationContext);

  return (
    <>
      <h3>Welcome to Admin Dashboard</h3>
      <hr />
      <p>Total Notification: {counter}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        ++
      </button>{" "}
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        --
      </button>
    </>
  );
};

export default Dashboard;
