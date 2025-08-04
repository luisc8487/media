import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  const res = await axios.delete(`https://localhost:3005/users/${user.id}`);

  return res.data;
});

export {removeUser};
