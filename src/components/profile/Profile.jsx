import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../api/userProfile";

function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const profile = useSelector((state) => {
    return state.user.profile;
  });

  const firstName = profile ? profile.firstName : null;

  useEffect(() => {
    if (token) {
      dispatch(userProfile(token));
    } else {
      console.error("Aucun token trouvé !");
    }
  }, [dispatch, token]);

  return (
    <div>
      <h1>Profil</h1>
      {profile ? <p>Bienvenue, {firstName} !</p> : <p>Chargement...</p>}
    </div>
  );
}

export default Profile;
