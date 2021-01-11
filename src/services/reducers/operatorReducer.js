export const operatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_OPERATORS':
      return { items: action.operators, isLoading: !action.operators };
    case 'SET_ACTIVE_OPERATOR':
      return { ...state, activeOperator: action.operator, isLoading: !action.operator };
    default:
      return state;
  }
};
