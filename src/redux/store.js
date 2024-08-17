import { configureStore } from "@reduxjs/toolkit";
import nodeSlice from "./slices/nodeSlice";
import edgeSlice from "./slices/edgeSlice";

export const store = configureStore({
  reducer: {
    nodes: nodeSlice,
    edges: edgeSlice,
  },
});
