import { useEffect, useState } from "react";

export function useTypewriter(text: string, speedMs = 24) {
  const [out, setOut] = useState("");

  useEffect(() => {
    setOut(""); // restart if text changes
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs]);

  return out;
}
