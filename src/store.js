import { createStore } from "redux";

const initialState = {
  amount: "100.00",
  currencyCode: "USD",
};

function reducer(state = initialState, action) {
  console.log("action.type :>> ", action.type);
  switch (action.type) {
    case "amountChanged":
      return { ...state, amount: action.payload };
    case "currencyCodeChanged":
      console.log("action :>> ", action);
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer);
