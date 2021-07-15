import { useState } from "react";
import { Editor } from "containers/editor";
import { IFrameContainer } from "containers/iframe-container";
import { useAsyncEffect } from "hooks/use-async-effect";
import defaultCode from "templates/default-code";
import { convertJSXToBrowser } from "lib/jsx-helpers";

export default function Home() {
  const [code, setCode] = useState(defaultCode);
  const [imports, setImports] = useState([]);
  const [snippet, setSnippet] = useState();

  useAsyncEffect(async () => {
    await handleOnCodeChange(defaultCode);
  }, []);

  const handleOnCodeChange = async (_code) => {
    try {
      const response = await fetch("/api/transform-code", {
        method: "POST",
        body: JSON.stringify({ code: _code }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((data) => data.json());

      setImports(response.imports);
      setSnippet(response.snippet);
    } catch (err) {
      // ignore
    }

    setCode(_code);
  };

  return (
    <>
      <main className="p-2">
        <h3 className="m-0 p-0">Hen@next</h3>
        <p className="m-0 p-0">
          <small>Server Powered ESM React Playground</small>
        </p>
        <a
          href="https://github.com/barelyhuman"
          className="p-1 mt-1 bg-lighter"
        >
          Github
        </a>
      </main>
      <section className="p-2">
        <div className="flex flex-wrap">
          <div className="flex-1">
            <h3>Editor</h3>
            <hr />
            <Editor defaultValue={code} onChange={handleOnCodeChange} />
          </div>
          <div className="ml-1 flex-1">
            <h3>Preview</h3>
            <hr />
            <IFrameContainer imports={imports} snippet={snippet} />
          </div>
        </div>
      </section>
    </>
  );
}
