import { useEffect, useState } from 'react/cjs/react.development';

export default function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //setValue(value + 1);
      setValue(currentValue => currentValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span className="bg-red-200 p-3 m-2 font-semibold">{value}</span>;
}
