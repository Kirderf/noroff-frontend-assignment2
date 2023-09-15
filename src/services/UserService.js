const apiURL = "https://atlantic-little-snipe.glitch.me";
const apiKey = "";

const headers = {
  "Content-Type": "application/json",
  "X-API-Key": apiKey,
};

export default {};

export const loginOrCreateByUsername = async (username) => {
  const response = await fetch(apiURL + "/translations?username=" + username);
  if (response.status === 200 || response.status === 201) {
    const user = await response.json();
    if (user[0] && user[0] !== "undefined") return { user: user[0] };
  }

  return await createUser(username);
};

export const createUser = async (username) => {
  const createResponse = await fetch(apiURL + "/translations", {
    method: "post",
    headers: headers,
    body: JSON.stringify({
      username: username,
      translations: [],
    }),
  });
  if (createResponse.status === 200 || createResponse.status === 201) {
    const user = await createResponse.json();
    return { user };
  }
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
