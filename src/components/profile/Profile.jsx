import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userProfile } from "../../api/userProfile";
import { updateUserProfile } from "../../api/updateUserProfile";

import "./profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  console.log("Token dans Redux :", token);
  const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    if (token) {
      dispatch(userProfile(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (profile) {
      setUserName(profile.userName || "");
    }
  }, [profile]);

  const handleSave = (e) => {
    e.preventDefault();
    if (userName !== profile?.userName) {
      dispatch(
        updateUserProfile({
          ...profile,
          userName,
          token,
        })
      );
      setIsEditing(false);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          {isEditing ? (
            "Edit user info"
          ) : (
            <>
              Welcome back <br />
              {profile?.firstName} {profile?.lastName} !
            </>
          )}
        </h1>

        {isEditing ? (
          <form className="profile-form" onSubmit={handleSave}>
            <div className="form-box">
              <label htmlFor="userName">
                User name:
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-input"
                />
              </label>
            </div>

            <div className="form-box">
              <label htmlFor="firstName">
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={profile?.firstName}
                  readOnly
                  className="form-input"
                />
              </label>
            </div>

            <div className="form-box">
              <label htmlFor="lastName">
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={profile?.lastName}
                  readOnly
                  className="form-input"
                />
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="save-btn">
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
