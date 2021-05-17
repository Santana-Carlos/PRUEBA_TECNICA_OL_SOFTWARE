import { useState } from "react";

export const useHandleChange = (initial) => {
  const [value, setValue] = useState(initial);
  return { value: value, onChange: (e) => setValue(e.target.value) };
};
