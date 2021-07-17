import { useEffect } from "react";
import debounce from "lodash.debounce";
import { fetcher } from "lib/fetcher";
import { Button } from "components/button";

export function EditorToolbar({ code, onChange, ...props }) {
  useEffect(() => {
    debouncedFormat();
  }, []);

  async function format() {
    const formattedCode = await fetcher("/api/formatter", "POST", { code });
    onChange && onChange(formattedCode.code);
  }

  const debouncedFormat = debounce(format, 500);

  return (
    <>
      <Button onClick={debouncedFormat}>Format Code</Button>
    </>
  );
}
