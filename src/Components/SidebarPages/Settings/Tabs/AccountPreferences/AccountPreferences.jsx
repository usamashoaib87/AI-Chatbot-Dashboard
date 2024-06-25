import React from "react";
import "../../Settings.scss";

const AccountPreferences = () => {
  return (
    <div className="acc-pref">
      <div>
        <h3>Change password</h3>
      </div>
      <div className="pass-detail">
        <p>Change password</p>
        <input type="password" placeholder="  * * * * * * * *"></input>
        <div className="retype">
          <div>
            <p>New password</p>
            <input type="password" placeholder="  * * * * * * * *"></input>
          </div>
          <div>
            <p>Retype new password</p>
            <input type="password" placeholder="  * * * * * * * *"></input>
          </div>
        </div>
        <button>Update password</button>
      </div>
    </div>
  );
};

export default AccountPreferences;
