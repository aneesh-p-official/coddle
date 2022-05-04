import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import Dropdown from "./dropdown";

const Header = ({ history }) => {
  const burgerMenu = useRef();
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const handleClick = () => {
    burgerMenu.current.checked = false
  }

  return (
    <header>
      <div className="wrapper">
        <div className="inner-header">
          <Dropdown />
          <div className="menu">
            <button disabled={disabled} onClick={handleMenu}>
            <label htmlFor="check" className="humberger">
              <input type="checkbox" id="check" ref={burgerMenu} /> 
              <span></span>
              <span></span>
              <span></span>
            </label>
            </button>
          </div>
        </div>
      </div>
      <Hamburger state={state} handleCallback={handleClick} />
    </header>
  );
};

export default withRouter(Header);
