import React, { useState } from "react";
import Languages from "./languages.js";
import CompleteTranslation from "./translate.js";

const TheFieldToBeTranslated = ({ label }) => {
  const [targetlanguage, setTargetLanguage] = useState("");
  const [text, setText] = useState("");
  const handleTyping = (text) => {
    setText(text);
    return;
  };
  return (
    <div>
      <label>{label}</label>
      <input className="input" onChange={(e) => handleTyping(e.target.value)} />
      <CompleteTranslation language={targetlanguage} thetext={text} />
    </div>
  );
};

export default TheFieldToBeTranslated;
