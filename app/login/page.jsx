'use client';

import AsideTemplate from "../components/AsideTemplate";
import SectionCore from "../components/SectionCore";
import BareBone from "../components/BareBone";
import { useState } from "react";
import { loginUser } from "../request-api/login";
import SubmitButton from "../components/button-login/button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(formData) {
      const result = await loginUser(formData);
      if (result.success) {
        console.log("✅ Berhasil Login!", result.data);
      } else {
        console.log("❌ Gagal Login!", result);
      }
    }

    return (
        <>
            <BareBone>
                <SectionCore>
                    <header id="Title-And-Oauth-Next-Feature" className="mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
                        <h1
                            className="
                            text-gray-900 font-semibold text-xl
                            dark:text-white
                            md:text-2xl
                            "
                        >Login to <span
                            className="

                            "
                        >Qonnect By Dutaqu</span>
                        </h1>
                    </header>
                    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div id="input-form-and-button-remember-me-forgot-password-sign-in-button-sing-up-button" className="space-y-4">
                        <form action={handleSubmit} className="">
                            <div id="email" className="mb-4">
                                <label
                                  htmlFor=""
                                  className="
                                    block
                                    mb-2
                                    text-sm font-medium text-gray-900
                                    dark:text-white
                                    md:text-base
                                  "
                                >Email</label>
                                <input
                                    type="email"
                                    placeholder="Input your email"
                                    className={
                                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                        "block w-full p-2 transition-all duration-300 ease-in-out " +
                                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                        "focus:shadow-md focus:scale-105 " +
                                        "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                        "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    }
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                            <div id="password" className="mb-9">
                                <label
                                  htmlFor=""
                                  className="
                                    block
                                    mb-2
                                    text-sm font-medium text-gray-900
                                    dark:text-white
                                    md:text-base
                                  "
                                >Password</label>
                                <input
                                    type="password"
                                    placeholder="Input your password"
                                    className={
                                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                        "block w-full p-2 transition-all duration-300 ease-in-out " +
                                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                        "focus:shadow-md focus:scale-105 " +
                                        "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                        "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    }
                                    value={password}
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    />

                            </div>
                            <div id="remember-me-forgot-password" className="mb-9 flex justify-between ">
                                <div className="flex items-center">
                                    <input
                                        id="link-checkbox"
                                        type="checkbox"
                                        className={
                                            "w-4 h-4 text-blue-600 bg-gray-100 border border-gray-300 rounded-sm " +
                                            "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                            "transition-all duration-300 ease-in-out " +
                                            "hover:border-blue-400 hover:bg-blue-50 " +
                                            "dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 " +
                                            "dark:focus:ring-blue-600 dark:focus:border-blue-500"
                                        }
                                    />

                                    <label
                                      htmlFor="link-checkbox"
                                      className="
                                        text-sm font-medium text-gray-900
                                        ms-2 dark:text-gray-300
                                        md:text-base
                                      "
                                    >
                                        Remember Me
                                    </label>
                                </div>
                                <a
                                  href="#"
                                  className="
                                    text-sm font-medium text-[#2563eb]
                                    hover:underline dark:text-[#3b82f6]
                                    md:text-base
                                  "
                                >Forgot Password</a>
                            </div>
                              <SubmitButton />
                        </form>
                        <footer className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
                            <p
                              className="
                                text-sm font-light text-gray-500
                                dark:text-gray-400
                                md:text-base
                              "
                            >Doesn't have an account?<a
                              href="#"
                              className="
                                ml-1
                                font-medium text-font-600
                                hover:underline dark:text-primary-500
                                md:text-font-600
                              "
                            >Sign Up</a></p>
                        </footer>
                    </div>
                </SectionCore>
                <AsideTemplate />
            </BareBone>
        </>
    )
}