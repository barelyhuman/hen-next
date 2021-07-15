import { transform } from "@babel/standalone";
import styledJSX from "styled-jsx/babel";

export const convertJSXToBrowser = (code) => {
  const transformedCode = transform(code, {
    sourceType: "unambiguous",
    presets: ["env", "react"],
    plugins: [styledJSX],
  }).code;

  return transformedCode;
};
