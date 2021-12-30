import { FunctionComponent } from "react";

interface CommonlayoutProps {
  children: React.ReactElement;
}

const Commonlayout: FunctionComponent<CommonlayoutProps> = ({ children }) => {
  return <div className="min-h-screen bg-black">{children}</div>;
};

export default Commonlayout;
