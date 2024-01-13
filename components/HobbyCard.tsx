import React from "react";

interface HobbyCardProps {
    icon: JSX.Element;
    label: string;
  }
  
  const HobbyCard = ({ icon, label } : HobbyCardProps) => (
    <div className="card-hobby">
      {icon}
      {label}
    </div>
  );

export default HobbyCard;