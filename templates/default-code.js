export default `// You can import modules from esm and use them accordingly
import cn from "https://esm.sh/clsx";
import {If} from "https://esm.sh/react-extras";
import {format} from "https://esm.sh/@barelyhuman/date-utils";

() => {
  // All code should be here, including component definitions
  const [show,setShow] = React.useState(true);
  const classList = cn("bold");
  return (
    <>
      <If condition={show}>
        <>{format("DD/MM/YYYY | hh:mm",new Date())}</>
      </If>
      <div className="mt-1">
        <button onClick={()=>setShow(!show)}>Toggle Date</button>
      </div>      
      <style jsx>{\`
        @import url("https://unpkg.com/open-color@1.8.0/open-color.css");

        .bold {
          font-weight: bold;
        }

        .mt-1{
          margin-top:8px;
        }

        button {
          background: var(--oc-gray-9);
          border: 0px;
          color: var(--oc-gray-1);
          padding: 6px 12px;
          border-radius: 4px;
        }
        
        button:hover{
          background: var(--oc-gray-7);
          cursor:pointer;
        }
      \`}</style>
    </>
  );
};`;
