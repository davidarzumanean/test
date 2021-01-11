import React, { createContext, useReducer } from 'react';
import { operatorReducer } from '../reducers/operatorReducer';

export const OperatorContext = createContext();

const OperatorContextProvider = props => {
  const [operators, dispatch] = useReducer(operatorReducer, {
    items: [], isLoading: true, activeOperator: null,
  });

  return (
    <OperatorContext.Provider value={{ operators, dispatch }}>
      {props.children}
    </OperatorContext.Provider>
  );
};

export default OperatorContextProvider;
