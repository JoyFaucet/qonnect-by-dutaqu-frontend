import React from "react";

export default function BareBone({ children }) {
  return (
        <main id="container" className="flex flex-col min-h-screen md:flex-row">
            {children}
        </main>
  );
}
