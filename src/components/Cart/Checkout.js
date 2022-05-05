import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isempty = (value) => value.trim() !== "";
const fivechar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [forminputvalidating, setformisvalidating] = useState({
    name: true,
    street: true,
    postalcode: true,
    city: true,
  });

  const nameinputref = useRef();
  const streetinputref = useRef();
  const postalcodeinputref = useRef();
  const cityinputref = useRef();

  const confirmhandler = (event) => {
    event.preventDefault();

    const enteredname = nameinputref.current.value;
    const enteredstreet = streetinputref.current.value;
    const enteredpostalcode = postalcodeinputref.current.value;
    const enteredcity = cityinputref.current.value;

    const enterednameisvalid = isempty(enteredname);
    const enteredstreetisvalid = isempty(enteredstreet);
    const enteredcityisvalid = isempty(enteredcity);
    const enteredpostalcodeisvalid = fivechar(enteredpostalcode);

    setformisvalidating({
      name: enterednameisvalid,
      street: enteredstreetisvalid,
      city: enteredcityisvalid,
      postalcode: enteredpostalcodeisvalid,
    });

    const formisvalid =
      enterednameisvalid &&
      enteredstreetisvalid &&
      enteredpostalcodeisvalid &&
      enteredcityisvalid;

    if (!formisvalid) {
      return;
    }
    props.onConfirm({
      name: enteredname,
      street: enteredstreet,
      postalcode: enteredpostalcode,
      city: enteredcity,
    });
  };

  const inputnameclasses = `${classes.control} ${
    forminputvalidating.name ? "" : classes.invalid
  }`;
  const inputstreetclasses = `${classes.control} ${
    forminputvalidating.street ? "" : classes.invalid
  }`;
  const inputpostalcodeclasses = `${classes.control} ${
    forminputvalidating.postalcode ? "" : classes.invalid
  }`;
  const inputcityclasses = `${classes.control} ${
    forminputvalidating.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmhandler}>
      <div className={inputnameclasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameinputref} />
        {!forminputvalidating.name && <p>Enter valid name </p>}
      </div>
      <div className={inputstreetclasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetinputref} />
        {!forminputvalidating.street && <p>Enter valid street </p>}
      </div>
      <div className={inputpostalcodeclasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalcodeinputref} />
        {!forminputvalidating.postalcode && <p>Enter valid postalcode </p>}
      </div>
      <div className={inputcityclasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityinputref} />
        {!forminputvalidating.city && <p>Enter valid city </p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
