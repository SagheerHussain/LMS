import React from "react";

const AnalyticsCard = ({
    number = 0,
    title = "",
    icon,
}) => {
  return (
    <>
      <div className="analytics_card bg-primary px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="analytics">
            <h1 className="text-light_text text-4xl font-semibold">{number}</h1>
            <h4 className="text-light_text text-xl">{title}</h4>
          </div>
          <div className="icon">
            {icon}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsCard;
