import React from 'react'

const RadioButton = () => {
  return (
    <div className="radio_box">
      <input
        type="radio"
        name="usergender"
        id="radio01"
        className="w-full h-full appearance-none"
        value="F"
      />
      <label htmlFor="radio01" className="absolute left-0 z-10">
        여자
      </label>
    </div>
  );
}

export default RadioButton