import AsideTemplate from "../components/AsideTemplate";
import BareBone from "../components/BareBone";
import SectionCore from "../components/SectionCore";

export default function register() {
    return (
        <BareBone>
            <SectionCore>
                <header id="Title-And-Oauth-Next-Feature" className="mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
                    <h1 className="text-gray-900 dark:text-white font-semibold text-xl md:text-2xl">Register to <span>Qonnect By Dutaqu</span></h1>
                </header>
                <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
                <div id="multipe-step-wizard" className="relative flex items-center w-full mb-6">
                    {/* Garis full background */}
                    <div
                      className="
                        w-full h-[3px]
                        bg-gray-200
                        rounded-full
                        absolute top-1/2 left-0 -translate-y-1/2
                      "
                    ></div>
                    <div
                        className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-br from-green-400 to-blue-600 -translate-y-1/2 rounded-full transition-all duration-300"
                        style={{ width: "25%" }} // ganti sesuai step
                    ></div>

                    {/* Step 1 */}
                    <div className="relative z-10 w-1/4 flex justify-center">
                        <div
                            className="
                            flex
                            w-10 h-10
                            text-white font-semibold
                            bg-[#2563eb]
                            rounded-full
                            items-center justify-center
                            md:w-12 md:h-12
                            "
                        >1</div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 w-1/4 flex justify-center">
                        <div
                          className="
                            flex
                            w-10 h-10
                            font-semibold text-white
                            bg-[#2563eb]
                            rounded-full
                            items-center justify-center
                            md:w-12 md:h-12
                          "
                        >2</div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 w-1/4 flex justify-center">
                        <div
                          className="
                            flex
                            w-10 h-10
                            font-semibold text-white
                            bg-gray-300
                            rounded-full
                            items-center justify-center dark:
                            md:w-12 md:h-12
                          "
                        >3</div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative z-10 w-1/4 flex justify-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center font-semibold text-white">4</div>
                    </div>
                </div>
                <div id="form-register" className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
                    <form action="" className="flex flex-col mb-2">
                        <div className="w-full mb-4">
                            <label
                              htmlFor=""
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Username</label>
                            <input 
                              type="text" 
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="Input your username" />
                        </div>
                        <div className="w-full mb-4">
                            <label
                              htmlFor="email"
                              className="
                                block
                                mb-2
                                text-sm font-medium text-gray-900
                                dark:text-white
                                md:text-base
                              "
                            >Email</label>
                            <input 
                              type="text" 
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="Input your email" 
                              id="email"
                              name="email"/>
                        </div>
                        <div className="w-full mb-4">
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
                              type="text" 
                              className={
                                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
                                "block w-full p-2 transition-all duration-300 ease-in-out " +
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                "focus:shadow-md focus:scale-105 " +
                                "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                                "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }
                              placeholder="Input your password" />
                        </div>
                    </form>
                    <div id="prev-next" className="flex justify-between items-center">
                        <button
                          type="button"
                          className="
                            px-4 py-2.5
                            text-white font-medium text-sm text-center
                            bg-gradient-to-r from-cyan-500 to-blue-500
                            rounded-lg
                            transition-all
                            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 me-2 duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                          "
                        >Prev</button>
                        <button
                          type="button"
                          className="
                            px-4 py-2.5
                            text-white font-medium text-sm text-center
                            bg-gradient-to-br from-green-400 to-blue-600
                            rounded-lg
                            transition-all
                            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                          "
                        >Next</button>
                    </div>
                </div>
            </SectionCore>
            <AsideTemplate />
        </BareBone>
    )
}