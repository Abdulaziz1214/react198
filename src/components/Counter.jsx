import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Янги сон:", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Қўшиш
      </button>
    </div>
  );
}

export default Counter
