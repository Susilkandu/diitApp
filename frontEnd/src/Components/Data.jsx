import React, { useState } from 'react';

const Data = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleButton = () => {
    if (!isDisabled) {
      setIsToggled(!isToggled);
    }
  };

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div style={{margin:'10rem 0'}}>
      <button onClick={toggleButton} disabled={isDisabled}>
        {isToggled ? 'Enabled' : 'Disabled'}
      </button>
      <br />
      <button onClick={toggleDisabled}>
        {isDisabled ? 'Enable' : 'Disable'} Toggle
      </button>
    </div>
  );
};

export default Data;
