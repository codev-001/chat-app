import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className={`checkbox checkbox-info ${
              selectedGender === "male" ? "selected" : ""
            }`}
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className={`checkbox checkbox-info ${
              selectedGender === "female" ? "selected" : ""
            }`}
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
