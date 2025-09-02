import AsideTemplate from "../components/AsideTemplate";
import SectionCore from "../components/SectionCore";
import BareBone from "../components/BareBone";

export default function Login() {
    return (
        <>
            <BareBone>
                <SectionCore>
                    <header id="Title-And-Oauth-Next-Feature" className="mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
                        <h1 className="text-gray-900 dark:text-white font-semibold text-xl md:text-2xl">Login to <span className="">Qonnect By Dutaqu</span></h1>
                    </header>
                    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div id="input-form-and-button-remember-me-forgot-password-sign-in-button-sing-up-button" className="space-y-4">
                        <form action="" className="">
                            <div id="email" className="mb-4">
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:text-base">Email</label>
                                <input
                                    type="email"
                                    placeholder="Input your email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             block w-full p-2 transition-all duration-300 ease-in-out 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
             focus:shadow-md focus:scale-105 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div id="password" className="mb-9">
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:text-base">Password</label>
                                <input
                                    type="password"
                                    placeholder="Input your password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             block w-full p-2 transition-all duration-300 ease-in-out 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
             focus:shadow-md focus:scale-105 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />

                            </div>
                            <div id="remember-me-forgot-password" className="mb-9 flex justify-between ">
                                <div className="flex items-center">
                                    <input
                                        id="link-checkbox"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border border-gray-300 rounded-sm 
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
             transition-all duration-300 ease-in-out 
             hover:border-blue-400 hover:bg-blue-50 
             dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 
             dark:focus:ring-blue-600 dark:focus:border-blue-500"
                                    />

                                    <label
                                        htmlFor="link-checkbox"
                                        className="ms-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                                <a href="#" className="text-sm font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6] md:text-base">Forgot Password</a>
                            </div>
                            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  w-full md:text-base">Sign In To Your Account</button>
                        </form>
                        <footer className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 md:text-base">Doesn't have an account?<a href="#" className="font-medium text-font-600 hover:underline dark:text-primary-500 ml-1 md:text-font-600">Sign Up</a></p>
                        </footer>
                    </div>
                </SectionCore>
                <AsideTemplate />
            </BareBone>
        </>
    )
}