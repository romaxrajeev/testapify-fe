import { Handle, Position } from "@xyflow/react";
import { Card, Typography } from "antd";

const ApiNode = () => {
  return (
    <>
      <Card>
        <Handle type="target" position={Position.Top} />
        <Typography.Text>API Block</Typography.Text>
        <Handle type="source" position={Position.Bottom} />
      </Card>
    </>
  );
};

export default ApiNode;
