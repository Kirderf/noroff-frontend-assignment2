import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const headers = {
  "Content-Type": "application/json",
  "X-API-Key": apiKey,
};

/**
 * Gets the user from the database or creates a new user if the user does not exist.
 */
export const getUserOrLogin = createAsyncThunk(
  "user/getUserOrLogin",
  async (payload) => {
    const response = await fetch(apiURL + "/translations?username=" + payload);
    if (response.status === 200 || response.status === 201) {
      const user = await response.json();
      if (user[0] && user[0].username !== undefined) return { user: user[0] };
    }
    const createResponse = await fetch(apiURL + "/translations", {
      method: "post",
      headers: headers,
      body: JSON.stringify({
        username: payload,
        translations: [],
      }),
    });
    if (createResponse.ok) {
      const user = await createResponse.json();
      return { user };
    }
  }
);

/**
 * Adds a translation to the user.
 */
export const addTranslation = createAsyncThunk(
  "user/addTranslation",
  async (payload) => {
    const response = await fetch(apiURL + "/translations/" + payload.id, {
      method: "PATCH",
      mode: "cors",
      headers: headers,
      body: JSON.stringify({ translations: payload.translations }),
    });
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      const user = await response.json();
      return { user: user };
    }
  }
);

/**
 * Creates a reducer for keeping the state of the user-data.
 */
export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserOrLogin.fulfilled, (state, action) => {
        return action.payload.user;
      })
      .addCase(getUserOrLogin.rejected, (state, action) => {
        return action.payload.user.error;
      });
    builder.addCase(addTranslation.fulfilled, (state, action) => {
      return action.payload.user;
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
