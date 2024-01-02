"use client";

import Page from "./components/Page";
import { Provider as JotaiProvider } from "jotai";

const Homepage = () => {
  return (
    <JotaiProvider>
      <main className="p-3 flex justify-center items-center w-full h-[100vh]">
        <Page />
      </main>
    </JotaiProvider>
  );
};

export default Homepage;
