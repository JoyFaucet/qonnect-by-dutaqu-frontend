import React from "react";

export default function SectionCore({ children }) {
  return (
        <section id="login-form" className="p-6 md:w-1/2 md:flex md:flex-col justify-center md:p-8 lg:p-10 xl:p-12 2xl:p-14">
            {children}
        </section>
  );
}
