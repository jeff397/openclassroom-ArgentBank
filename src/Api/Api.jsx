export async function postLogin(credentials) {
  const url = "http://localhost:3001/api/v1/user/login";
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return null;
  }
}
