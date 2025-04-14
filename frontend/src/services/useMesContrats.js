import { useState, useEffect } from "react";

function useMesContrats() {
  const [mesContrats, setMesContrats] = useState([]);

  useEffect(() => {
    const dataLocal = localStorage.getItem("mesContrats");
    if (dataLocal) {
      setMesContrats(JSON.parse(dataLocal));
    }
  }, []);

  return [mesContrats, setMesContrats];
}

export default useMesContrats;
