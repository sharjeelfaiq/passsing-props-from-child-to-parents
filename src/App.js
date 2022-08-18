import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

import Popup from "./components/Popup";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Button
          variant="contained"
          value="Open Popup"
          onClick={togglePopup}
          sx={{ m: "15px" }}
          size="small"
        >
          Open
        </Button>
        {isOpen && <Popup handleClose={togglePopup} setCount={setCount} />}
      </div>
      <Box sx={{ mx: 2 }}>
        <h4>Lineups = {count < 0 ? 0 : count}</h4>
      </Box>
    </>
  );
}

export default App;
