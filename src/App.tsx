import { useState } from "react";

import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-10">
      <div className="flex gap-10 [&>a>img]:duration-400 [&>a>img]:transition-[filter] [&>a>img]:w-24 [&>a>img]:h-24">
        <a href="https://vitejs.dev" target="_blank">
          <img
            className="hover:[filter:drop-shadow(#646cffaa_0_0_2em)]"
            src={viteLogo}
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            className="hover:[filter:drop-shadow(#61dafbaa_0_0_2em)] animate-[spin_20s_linear_infinite]"
            src={reactLogo}
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="font-bold text-2xl sm:text-4xl">
        Vite + React + Scss + TS
      </h1>
      <button
        className="p-2 px-5 rounded-lg bg-black/20 hover:bg-transparent transition-color duration-200 hover:ring-[1px] hover:ring-[#646cff] text-black dark:text-white"
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <p className="text-black/60 dark:text-white/60 text-xs sm:text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
