import { useEffect } from 'react';
import { RateTable } from './RateTable';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyCodePicker } from './CurrencyCodePicker';
import { AmountField } from './AmountField';
import { getExchangeRates } from '../api';
import {
  getAmount,
  getCurrencyData,
  getCurrencyCode,
  changeCurrencyCode,
  supportedCurrencies,
} from '../store/rates';

export function ExchangeRate() {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  // fetch the exchange rates at first time it renders
  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode));
  }, []);

  return (
    <>
      <section>
        <h1 className='ExchangeRate-header'>
          Exchange Rates{' '}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
