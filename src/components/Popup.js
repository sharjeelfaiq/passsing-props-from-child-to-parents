import React, { useState } from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "../css/Popup.css";
// import Counter from "./Counter";
// import PropTypes from 'prop-types'

function Popup(props) {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
    props.setCount(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter > 0) {
      setCounter(counter - 1);
      props.setCount(counter - 1);
    }
  };

  const Lineup_1 = () => {
    setCounter(1);
    props.setCount(1);
  };

  const Lineup_3 = () => {
    setCounter(3);
    props.setCount(3);
  };

  const Lineup_20 = () => {
    setCounter(20);
    props.setCount(20);
  };

  const Lineup_150 = () => {
    setCounter(150);
    props.setCount(150);
  };

  const reset = () => {
    setCounter(0);
    props.setCount(0);
  };
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <Box sx={{ letterSpacing: 2 }}>
          <h2 align="center">How Many Lineups Do You Want?</h2>
        </Box>
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "red",
              maxWidth: "200px",
              margin: "auto",
              borderRadius: "10px",
              padding: "8px",
              border: "1px solid black",
              boxShadow: "0px 10px 20px -5px rgba(0, 0, 0, 0.75)",
            }}
            className="counter-box"
          >
            {/* Counter -STARTS */}
            <Box style={{ color: "white" }} sx={{ alignSelf: "center" }}>
              <Box sx={{ fontSize: 18 }}>{counter < 0 ? 0 : counter}</Box>
            </Box>
            {/* Counter -ENDS */}
            {/* Increment and Decrement Buttons - START */}
            <Box sx={{ alignSelf: "center" }}>
              <Box>
                <KeyboardArrowUpIcon
                  onClick={handleClick1}
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    alignSelf: "center",
                  }}
                />
              </Box>
              <Box>
                <KeyboardArrowDownIcon
                  onClick={handleClick2}
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    alignSelf: "center",
                  }}
                />
              </Box>
            </Box>
            {/* Increment and Decrement Buttons - END */}
            {/* lineup Text - STARTS */}
            <h3 style={{ color: "white" }}>LINEUPS</h3>
            {/* lineup Text - ENDS */}
          </Box>
          {/* Options - START */}
          <Box sx={{ my: 5, display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                border: "1px solid black",
                maxWidth: "100px",
                borderRadius: "12px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={Lineup_1}
            >
              <span style={{ fontWeight: "bold" }}>
                1<br />
                Lineup
              </span>
            </div>
            <div
              style={{
                border: "1px solid black",
                maxWidth: "100px",
                borderRadius: "12px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={Lineup_3}
            >
              <span style={{ fontWeight: "bold" }}>
                3<br />
                Lineups
              </span>
            </div>
            <div
              style={{
                border: "1px solid black",
                maxWidth: "100px",
                borderRadius: "12px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={Lineup_20}
            >
              <span style={{ fontWeight: "bold" }}>
                20
                <br />
                Lineups
              </span>
            </div>
            <div
              style={{
                border: "1px solid black",
                maxWidth: "100px",
                borderRadius: "12px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={Lineup_150}
            >
              <span style={{ fontWeight: "bold" }}>
                150
                <br />
                Lineups
              </span>
            </div>
          </Box>
          {/* Options - END */}

          <Button
            variant="outlined"
            color="error"
            onClick={reset}
            size="small"
            sx={{ ml: 2, borderRadius: "50px" }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

// Popup.propTypes = {}

export default Popup;
