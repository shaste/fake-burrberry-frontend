import React from "react";

import Recommend from "./Recommend";
import RelevantLinks from "./RelevantLinks";
import Description from "./Description";
import Delivery from "./Delivery";
import Info from "./Info";

export default () => {
  return (
    <main>
      <Info />
      <Description />
      <Delivery />
      <div className="container">
        <Recommend />
        <RelevantLinks />
      </div>
    </main>
  );
};
