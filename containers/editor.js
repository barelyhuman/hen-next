import hljs from "highlight.js";
import React, { useState } from "react";
import CodeEditor from "react-simple-code-editor";

// TODO: assign this once a proper code editor is added
const highlighter = (code) => {
  return code && code.length && hljs.highlightAuto(code, ["js"]).value;
};

// TODO: replace with a proper text editor / code editor
export const Editor = ({ defaultValue, onChange, ...props }) => {
  const [code, setCode] = useState(defaultValue || "");

  const handleChange = (code) => {
    setCode(code);
    onChange && onChange(code);
  };

  return (
    <>
      <CodeEditor
        value={code}
        onValueChange={handleChange}
        highlight={highlighter}
        padding={10}
        style={{
          fontFamily: '"Hack", monospace',
          fontSize: 14,
        }}
      />
    </>
  );
};
