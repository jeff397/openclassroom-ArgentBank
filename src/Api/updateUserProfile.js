export const updateUserProfile = async ({
  firstName,
  lastName,
  userName,
  token,
}) => {
  console.log("Token envoyé dans la requête :", token); // 🔍 Vérification

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`, // 🔥 Vérifie bien ce format !
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, userName }),
    });

    if (!response.ok) {
      throw new Error(`Erreur API : ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur API :", error);
    throw error;
  }
};
