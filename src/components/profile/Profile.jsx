import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../api/userProfile";
import { updateUserProfile } from "../../api/updateUserProfile"; // Fonction pour mettre à jour l'utilisateur

import "./profile.css";

function Profile() {
  // Déclaration de l'état isEditing avec useState
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  console.log("Token dans Redux :", token);

  const profile = useSelector((state) => state.user.profile);

  // Initialisation des valeurs de userName, firstName et lastName
  useEffect(() => {
    if (token) {
      dispatch(userProfile(token));
    } else {
      console.error("Aucun token trouvé !");
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (profile) {
      setUserName(profile.userName || ""); // Initialiser le username avec la valeur actuelle du profil
    }
  }, [profile]);

  const handleSave = () => {
    if (userName !== profile?.userName) {
      console.log("Token envoyé dans handleSave :", token); // 🔍 Vérification

      dispatch(
        updateUserProfile({
          ...profile,
          userName,
          token, // Assure-toi que le token est bien inclus !
        })
      );

      setIsEditing(false); // Fermer le formulaire
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          {isEditing
            ? "Edit user info"
            : `Welcome back\n${profile?.firstName} ${profile?.lastName} !`}
        </h1>

        {isEditing ? (
          <div>
            <label>
              Username:
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>

            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={profile?.firstName}
                readOnly
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={profile?.lastName}
                readOnly
              />
            </label>

            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
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
