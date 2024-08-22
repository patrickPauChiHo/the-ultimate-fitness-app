import React from "react";

function Button({ text, func }) {
  return (
    <button
      onClick={func}
      className="px-8 py-4 mx-auto rounded-md border-blue-400 border-solid
      border-[2px] bg-slate-950 blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
