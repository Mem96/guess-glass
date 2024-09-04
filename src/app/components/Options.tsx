import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Options = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-2 left-2">
      <button
        className="icon-button absolute top-0 left-0 z-10"
        onClick={() => setMenuOpen((p) => !p)}
      >
        <i className="material-icons mt-[1px] ml-[1px]">
          {menuOpen ? "close" : "settings"}
        </i>
      </button>
      <div
        className={clsx(
          twMerge(
            "absolute top-0 left-0 w-24 h-24 bg-red-200 overflow-hidden pt-[36px] transition-all rounded-2xl",
            !menuOpen && " translate-x-2 translate-y-2 w-0 h-0 opacity-0"
          )
        )}
      >
        <p className="z-10">ciao ciao ciao ciao ciao</p>
      </div>
    </div>
  );
};

export default Options;
