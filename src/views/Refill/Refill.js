import React, { useEffect, useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import NumberFormat from 'react-number-format';

import { OperatorContext } from "../../services/contexts/OperatorContext";
import { getOperatorById, refillBalance } from "../../services/actions";

import Loader from "../../components/Loader/Loader";
import './refill.scss';

function Refill() {
  const { operators, dispatch } = useContext(OperatorContext);
  const [ phone, setPhone ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ error, setError ] = useState('');
  const [ isValidForm, setIsValidForm ] = useState(false);

  let { id } = useParams();
  let history = useHistory();

  useEffect( () => {
    const fetchOperator = async () => {
      const operatorById = await getOperatorById(id);
      dispatch({type: 'SET_ACTIVE_OPERATOR', operator: operatorById.operator})
    }
    fetchOperator();

    return () => {
      dispatch({type: 'SET_ACTIVE_OPERATOR', operator: null})
    }
  }, []);

  useEffect(() => {
    if (phone.length < 18 || !amount) setIsValidForm(false);
    else setIsValidForm(true);
  }, [phone, amount])

  const validateAmount = (values) => {
    if (values.floatValue > 1000) {
      return setAmount('1000');
    }
    if (values.floatValue < 1) {
      return setAmount('');
    }
    setAmount(values.floatValue);
  }

  const handleRefillBalance = async () => {
    const res = await refillBalance({
      id: operators?.activeOperator?.id,
      params: {
        phone,
        amount,
      },
    });

    if (res._bodyInit === 200) {
      history.push("/");
    } else {
      setError('Something went wrong, please try again.')
    }
  }

  return (
    <div className="refill-wrapper content-wrapper">
      <h1 className="main-title">
        Refill the balance {operators?.activeOperator && `of ${operators?.activeOperator?.name}`}
      </h1>
      {operators.isLoading
        ?
        <Loader />
        :
        <div className="refill-form">
          <img className="operator-logo"
               src={operators?.activeOperator?.logoUrl}
               alt={operators?.activeOperator?.name}/>

          <label>Phone Number</label>
          <NumberFormat
            className="input-box"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="tel"
            format="+7 (###) ### ## ##" />

          <label>Refill Amount</label>
          <NumberFormat
            className="input-box"
            value={amount}
            thousandSeparator={true}
            allowLeadingZeros={false}
            onValueChange={validateAmount}
            prefix="₽" />

          <button
            className={`submit ${!isValidForm ? 'disabled' : ''}`}
            type="button" onClick={handleRefillBalance}>
            Refill
          </button>

          {error && <p className="error">{error}</p>}
        </div>
      }
    </div>
  );
}

export default Refill;
