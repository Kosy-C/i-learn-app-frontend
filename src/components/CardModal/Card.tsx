import React, { FC } from "react";
import "./Card.css";
interface LayoutProps {
  children: React.ReactNode;
}
const Card: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="Card-Area">
      <div>{children}</div>
    </div>
  );
};
export default Card;
