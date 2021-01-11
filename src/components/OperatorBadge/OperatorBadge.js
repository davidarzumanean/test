import React from "react";
import { NavLink } from "react-router-dom";

import './OperatorBadge.scss';

function OperatorBadge({operator}) {
  return (
    <NavLink className="operator-badge" to={`/refill/${operator.id}`}>
      <img className="operator-logo" src={operator.logoUrl} alt={operator.name}/>
      <div className="operator-name">
        {operator.name}
      </div>
    </NavLink>
  );
}

export default OperatorBadge;
