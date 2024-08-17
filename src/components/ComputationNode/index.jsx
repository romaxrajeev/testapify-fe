import { Handle, Position } from "@xyflow/react";
import { Card, Typography } from "antd";

const ComputationNode = () => {
  return (
    <>
      <Card>
        <Handle type="target" position={Position.Top} />
        <Typography.Text>Computation Block</Typography.Text>
        <Handle type="source" position={Position.Bottom} />
      </Card>
    </>
  );
};

export default ComputationNode;
