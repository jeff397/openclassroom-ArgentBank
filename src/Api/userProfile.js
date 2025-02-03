import { userSuccess, userFail } from "../slices/userSlice";

export const userProfile = (token) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Échec de la récupération du profil");
    }

    const data = await res.json();

    dispatch({ type: userSuccess, payload: data.body });
  } catch (error) {
    dispatch({
      type: userFail,
      payload: error.message,
    });
  }
};
