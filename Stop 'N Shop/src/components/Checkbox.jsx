import React, { useState } from "react";

const variants = {
  primary: "border-blue_gray-100 border-[3px] bordr-solid",
};

const sizes = {
  xs: "h-[18px] w-[18px]",
};
function Checkbox({
  className = "",
  name,
  label,
  id = "checkbox_id",
  onChange,
  variant = "primary",
  size = "xs",
  handleClick,
}) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e?.target?.checked);
      setPrice(1000);
    }
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <>
      <div
        className={`${className} w-[250px]  flex items-center gap-[10px] cursor-pointer`}
      >
        <input
          className={`${(size && sizes[size]) || ""} ${
            (variant && variants[variant]) || ""
          }`}
          type="checkbox"
          name={name}
          onChange={handleChange}
          onClick={(e) => handleClick(id, checked)}
          id={id}
        ></input>
        {!!label && (
          <label
            htmlFor={id}
            className={`${checked ? `font-bold text-gray-800` : ``}`}
          >
            {label}
          </label>
        )}
      </div>
    </>
  );
}

export default Checkbox;
