import { getExchangeRates } from '../api';

export const supportedCurrencies = ['USD', 'EUR', 'JPY', 'CAD', 'GBP', 'MXN'];

const initialState = {
  amount: '10.00',
  currencyCode: 'USD',
  currencyData: { USD: 1.0 },
};

export function ratesReducer(state = initialState, action) {
  console.log('action.type :>> ', action.type);
  switch (action.type) {
    case 'rates/amountChanged':
      return { ...state, amount: action.payload };
    case 'rates/currencyCodeChanged':
      return { ...state, currencyCode: action.payload };
    case 'rates/ratesReceived':
      return { ...state, currencyData: action.payload };
    default:
      return state;
  }
}

//selectors

export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;

//action types

export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGED = 'rates/currencyCodeChanged';
export const RATES_RECEIVED = 'rates/ratesReceived';

//action creators

export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});

export function changeCurrencyCode(currencyCode) {
  return function changeCurrencyCodeThunk(dispatch) {
    dispatch({
      type: CURRENCY_CODE_CHANGED,
      payload: currencyCode,
    });
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      dispatch({
        type: RATES_RECEIVED,
        payload: rates,
      });
    });
  };
}
