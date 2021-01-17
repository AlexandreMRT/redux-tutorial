const initialState = {
  amount: '10.00',
  currencyCode: 'USD',
};

export function ratesReducer(state = initialState, action) {
  console.log('action.type :>> ', action.type);
  switch (action.type) {
    case 'rates/amountChanged':
      return { ...state, amount: action.payload };
    case 'rates/currencyCodeChanged':
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

//selectors

export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;

//action types

export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGED = 'rates/currencyCodeChanged';

//action creators

export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});

export const changeCurrencyCode = (currencyCode) => ({
  type: CURRENCY_CODE_CHANGED,
  payload: currencyCode,
});
