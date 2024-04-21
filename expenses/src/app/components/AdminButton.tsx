import { useContext, useState } from "react";
import { AdminRightsContext } from "../context/AdminRightsContext";

const AdminButton = () => {
  const [adminText, setAdminText] = useState("Admin On");
  const { toggleValue } = useContext(AdminRightsContext);

  const changeText = () => {
    setAdminText(adminText === "Admin On" ? "Admin Off" : "Admin On");
  };

  const adminFunction = () => {
    changeText();
    toggleValue();
  };

  return (
    <div>
      <button className="admin-button" onClick={adminFunction}>
        {adminText}
      </button>
    </div>
  );
};

export default AdminButton;
