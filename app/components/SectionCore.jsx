import React from "react";

export default function SectionCore({ children }) {
  return (
        <section
          id="login-form"
          className="
            p-6
            justify-center
            md:flex md:flex-col md:w-1/2 md:p-8
            lg:p-10
            xl:p-12
            2xl:p-14
            dark:bg-[#111827]
          "
        >
            {children}
        </section>
  );
}
