import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyEdgeChanges } from "@xyflow/react";

const edgeSlice = createSlice({
  name: "Edges",
  initialState: [],
  reducers: {
    addNewEdge: (state, action) => {
      return addEdge({ ...action.payload, animated: true }, state);
    },
    edgePlaceChange: (state, action) => {
      return applyEdgeChanges(action.payload, state);
    },
  },
});

export const { addNewEdge, edgePlaceChange } = edgeSlice.actions;

export default edgeSlice.reducer;
