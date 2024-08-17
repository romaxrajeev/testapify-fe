import { createSlice } from "@reduxjs/toolkit";
import { applyNodeChanges } from "@xyflow/react";

const nodeSlice = createSlice({
  name: "Nodes",
  initialState: [],
  reducers: {
    addNode: (state, action) => {
      state.push({
        ...action.payload,
        position: { x: 100, y: 100 },
        id: state.length.toString(),
      });
    },
    nodePlaceChange: (state, action) => {
      return applyNodeChanges(action.payload, state);
    },
  },
});

export const { addNode, nodePlaceChange } = nodeSlice.actions;

export default nodeSlice.reducer;
