"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        w-full
        px-5 py-2.5
        text-white font-medium text-sm text-center
        bg-gradient-to-br from-green-400 to-blue-600
        rounded-lg
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 me-2
        md:text-base
      "
    >
      {pending ? "Loading..." : "Sign In To Your Account"}
    </button>
  );
}
