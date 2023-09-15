const apiURL = "your-api-url-goes-here";
const apiKey = "your-public-api-key-goes-here";

const headers = {
  "Content-Type": "application/json",
  "X-API-Key": apiKey,
};

const getUserByUsername = async (username) => {
  const response = await fetch(`${apiURL}/translations?username=${username}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user by username");
  }
  return await response.json();
};

const createUser = async (username, translations = []) => {
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

const updateUserTranslations = async (userId, translations) => {
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

export { getUserByUsername, createUser, updateUserTranslations };
