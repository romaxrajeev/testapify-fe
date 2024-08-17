import { useCallback, useMemo } from "react";
import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import { nodePlaceChange } from "../../redux/slices/nodeSlice";
import { addNewEdge, edgePlaceChange } from "../../redux/slices/edgeSlice";
import ApiNode from "../../components/ApiNode";
import ValidationNode from "../../components/ValidationNode";
import ComputationNode from "../../components/ComputationNode";

const PlaygroundPage = () => {
  const nodes = useSelector((state) => state.nodes);
  const edges = useSelector((state) => state.edges);

  const nodeTypes = useMemo(
    () => ({
      apiNode: ApiNode,
      validationNode: ValidationNode,
      computationNode: ComputationNode,
    }),
    []
  );

  const dispatch = useDispatch();

  const onNodesChange = useCallback(
    (changes) => dispatch(nodePlaceChange(changes)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => dispatch(edgePlaceChange(changes)),
    []
  );

  const onConnect = useCallback((params) => dispatch(addNewEdge(params)), []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default PlaygroundPage;
