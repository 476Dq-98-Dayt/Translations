import React, { useEffect, useState } from "react";
import axios from "axios";
import Languages from "./languages.js";

const doTranslation = async (input, languageCode, cancelToken) => {
  try {
    const { data } = await axios.post(
      "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA",
      {
        q: input,
        target: languageCode,
      },
      { cancelToken: cancelToken.token }
    );
    //alert(1);
    return data.data.translations[0].translatedText;
  } catch (err) {
    //alert(2);
    return "";
  }
};

const CompleteTranslation = ({ language, thetext }) => {
  const [targetlanguage, setTargetLanguage] = useState("fr");
  const [translated, setTranslated] = useState("");
  //const [text, setText] = useState("");
  //setText(thetext);

  useEffect(() => {
    if (!thetext) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(thetext, targetlanguage, cancelToken).then(setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [thetext, language]);

  return (
    <div>
      <label className="label">Output</label>
      <h1 className="title">{translated}</h1>
    </div>
  );
};

export default CompleteTranslation;
