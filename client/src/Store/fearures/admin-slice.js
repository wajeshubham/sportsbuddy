import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getSport = createAsyncThunk("getSport", async () => {
  try {
    const response = await api.getSport();
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});
export const getCity = createAsyncThunk("getCity", async () => {
  try {
    const response = await api.getCity();
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});
export const getArea = createAsyncThunk("getArea", async () => {
  try {
    const response = await api.getArea();
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});
export const addSport = createAsyncThunk("createSport", async (sportData) => {
  console.log("sport", sportData);
  try {
    const response = await api.addSport(sportData);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const updateSport = createAsyncThunk(
  "updateSport",
  async ({ id, sport }) => {
    try {
      const response = await api.updateSport(id, sport);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteSport = createAsyncThunk("deleteSport", async (id) => {
  try {
    const response = await api.deleteSport(id);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const addCity = createAsyncThunk("createCity", async (city) => {
  try {
    const response = await api.addCity(city);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});
export const updateCity = createAsyncThunk(
  "updateCity",
  async ({ id, city }) => {
    try {
      const response = await api.updateCity(id, city);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const deleteCity = createAsyncThunk("deletecity", async (id) => {
  try {
    const response = await api.deleteCity(id);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});
export const addArea = createAsyncThunk("addArea", async (area) => {
  try {
    const response = await api.addArea(area);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const updateArea = createAsyncThunk(
  "updatearea",
  async ({ id, area }) => {
    try {
      const response = await api.updateArea(id, area);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const deleteArea = createAsyncThunk("deleteArea", async (id) => {
  try {
    const response = await api.deleteArea(id);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    cities: [],
    areaes: [],
    sports: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [getSport.pending]: (state, action) => {
      state.loading = true;
    },
    [getSport.fulfilled]: (state, action) => {
      state.loading = false;
      state.sports = action.payload;
    },
    [getSport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getCity.pending]: (state, action) => {
      state.loading = true;
    },
    [getCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.cities = action.payload;
    },
    [getCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getArea.pending]: (state, action) => {
      state.loading = true;
    },
    [getArea.fulfilled]: (state, action) => {
      state.loading = false;
      state.areaes = action.payload;
    },
    [getArea.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [addSport.pending]: (state, action) => {
      state.loading = true;
    },
    [addSport.fulfilled]: (state, action) => {
      state.loading = false;
      state.sport = action.payload;
    },
    [addSport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateSport.pending]: (state, action) => {
      state.loading = true;
    },
    [updateSport.fulfilled]: (state, action) => {
      state.loading = false;
      state.sport = action.payload;
    },
    [updateSport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteSport.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteSport.fulfilled]: (state, action) => {
      state.loading = false;
      state.sport = action.payload;
    },
    [deleteSport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [addCity.pending]: (state, action) => {
      state.loading = true;
    },
    [addCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    [addCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateCity.pending]: (state, action) => {
      state.loading = true;
    },
    [updateCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    [updateCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteCity.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    [deleteCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [addArea.pending]: (state, action) => {
      state.loading = true;
    },
    [addArea.fulfilled]: (state, action) => {
      state.loading = false;
      state.area = action.payload;
    },
    [addArea.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateArea.pending]: (state, action) => {
      state.loading = true;
    },
    [updateArea.fulfilled]: (state, action) => {
      state.loading = false;
      state.area = action.payload;
    },
    [updateArea.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteArea.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteArea.fulfilled]: (state, action) => {
      state.loading = false;
      state.area = action.payload;
    },
    [deleteArea.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const admin = adminSlice.actions;
export default adminSlice;
