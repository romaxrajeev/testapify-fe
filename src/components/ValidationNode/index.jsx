import { Handle, Position } from "@xyflow/react";
import { Card, Typography } from "antd";

const ValidationNode = () => {
  return (
    <>
      <Card>
        <Handle type="target" position={Position.Top} />
        <Typography.Text>Validation Block</Typography.Text>
        <Handle type="source" position={Position.Bottom} />
      </Card>
    </>
  );
};

export default ValidationNode;
