import "./styles.css";
import TheFieldToBeTranslated from "./components/field.js";
import Languages from "./components/languages.js";
import CompleteTranslation from "./components/translate.js";
import React, { useState } from "react";

export default function App() {
  const [targetlanguage, setTargetLanguage] = useState("fr");
  const [text, setText] = useState("");

  return (
    <div>
      <Languages language="{targetlanguage}" />
      <TheFieldToBeTranslated label="Translate the following Text" />
    </div>
  );
}
