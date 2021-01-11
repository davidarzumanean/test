import React, { useEffect, useContext } from "react";
import { OperatorContext } from "../../services/contexts/OperatorContext";
import { getOperators } from "../../services/actions";

import OperatorBadge from "../../components/OperatorBadge/OperatorBadge";
import Loader from "../../components/Loader/Loader";
import './home.scss';

function Home() {
  const { operators, dispatch } = useContext(OperatorContext);

  useEffect( () => {
    const fetchOperators = async () => {
      const operatorsList = await getOperators();
      dispatch({type: 'SET_OPERATORS', operators: operatorsList.operators})
    }
    fetchOperators();
  }, []);

  return (
    <div className="home-wrapper content-wrapper">
      <h1 className="main-title">Refill the balance of desired operator</h1>

      {operators?.isLoading
        ?
        <Loader />
        :
        <div className="operators-list">
          {
            operators?.items?.length && operators.items.map(operator => (
              <div className="badge-wrapper" key={operator.id}>
                <OperatorBadge operator={operator} />
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}

export default Home;
