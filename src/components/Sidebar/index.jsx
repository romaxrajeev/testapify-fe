import { Menu, Typography } from "antd";
import "./index.css";
import { useDispatch } from "react-redux";
import { addNode } from "../../redux/slices/nodeSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const items = [
    {
      key: "components",
      label: "Add Component",
      children: [
        {
          key: "computation",
          label: "Computation",
        },
        {
          key: "api",
          label: "API",
        },
        {
          key: "validation",
          label: "Validation",
        },
      ],
    },
  ];

  const onClick = async (e) => {
    switch (e.key) {
      case "computation":
        dispatch(
          addNode({
            data: { label: "sample-computation" },
            type: "computationNode",
          })
        );
        break;
      case "api":
        dispatch(
          addNode({
            data: { label: "sample-api" },
            type: "apiNode",
          })
        );
        break;
      case "validation":
        dispatch(
          addNode({
            data: { label: "sample-validation" },
            type: "validationNode",
          })
        );
        break;
    }
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <Menu mode="inline" items={items} onClick={onClick} />
      </div>
      <div className="version">
        <Typography.Text type="secondary">Version 1.0.0</Typography.Text>
      </div>
    </div>
  );
};

export default Sidebar;
