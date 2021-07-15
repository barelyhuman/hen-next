export default `// You can import modules from esm and use them accordingly
import cn from "https://esm.sh/clsx";
import {format} from "https://esm.sh/@barelyhuman/date-utils";

() => {
  // All code should be here, including component definitions
  const classList = cn("bold");
  return (
    <>
      <button>{format("hh:mm",new Date())}</button>
      <style jsx>{\`
        @import url("https://unpkg.com/open-color@1.8.0/open-color.css");

        .bold {
          font-weight: bold;
        }

        button {
          background: var(--oc-gray-9);
          border: 0px;
          color: var(--oc-gray-1);
          padding: 6px 12px;
          border-radius: 4px;
        }
      \`}</style>
    </>
  );
};`;
