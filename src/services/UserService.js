const apiURL = "https://atlantic-little-snipe.glitch.me";
const apiKey = "";

const headers = {
  "Content-Type": "application/json",
  "X-API-Key": apiKey,
};

export const getUserByUsername = async () => {
  await fetch(`https://atlantic-little-snipe.glitch.me/translations`)
    .then((response) => response.json())
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createUser = async (username, translations = []) => {
  const response = await fetch(`${apiURL}/translations`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      username,
      translations,
    }),
  });
  if (!response.ok) {
    throw new Error("Could not create new user");
  }
  return await response.json();
};

export const updateUserTranslations = async (userId, translations) => {
  const response = await fetch(`${apiURL}/translations/${userId}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({
      translations,
    }),
  });
  if (!response.ok) {
    throw new Error("Could not update translations history");
  }
  return await response.json();
};
