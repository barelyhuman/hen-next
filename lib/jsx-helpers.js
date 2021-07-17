import { transform } from "@babel/core";
import styledJSX from "styled-jsx/babel";

export const convertJSXToBrowser = (code) => {
  const transformedCode = transform(code, {
    sourceType: "unambiguous",
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [styledJSX],
  }).code;

  return transformedCode;
};
