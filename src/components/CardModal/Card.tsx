import React, { FC } from "react";
import "./Card.css";
interface LayoutProps {
  children: React.ReactNode;
}
const Card: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="Card-Area">
      {/* <div className="Modal-content"> */}
      <div>{children}</div>
      {/* </div> */}
    </div>
  );
};
export default Card;
