import Image from "next/image";

export default function Login() {
    return (
        <>
            <main id="container" className="flex flex-col min-h-screen">
                <section id="login-form" className="p-6">
                    <header id="Title-And-Oauth-Next-Feature" className="mt-2">
                        <h1 className="text-gray-900 dark:text-white font-semibold text-xl">Login to <span className="">Qonnect By Dutaqu</span></h1>
                    </header>
                    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div id="input-form-and-button-remember-me-forgot-password-sign-in-button-sing-up-button" className="space-y-4">
                        <form action="" className="">
                            <div id="email" className="mb-4">
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input your email" />
                            </div>
                            <div id="password" className="mb-9">
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" placeholder="Input your password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div id="remember-me-forgot-password" className="mb-9 flex justify-between ">
                                <div className="flex items-center">
                                    <input
                                        id="link-checkbox"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="link-checkbox"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                                <a href="#" className="text-sm font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]">Forgot Password</a>
                            </div>
                            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  w-full">Sign In To Your Account</button>
                        </form>
                        <footer className="mb-2">
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">Doesn't have an account?<a href="#" className="font-medium text-font-600 hover:underline dark:text-primary-500 ml-1 md:text-blue-50">Sign Up</a></p>
                        </footer>
                    </div>
                </section>
                <aside id="content" className="flex-grow flex flex-col bg-[#2563eb]">
                    <div id="container" className="flex flex-col justify-evenly flex-grow p-4">
                        <div id="image-logo-and-title" className="mt-2 mb-2">
                            <img src={null} alt="" />
                            <h2 className="text-xl font-bold text-white">Qonnect By Dutaqu</h2>
                        </div>
                        <div id="content-description" className="mb-2 space-y-2">
                            <h1 className="text-2xl font-bold text-white">Explore the world’s leading design portfolios.</h1>
                            <p className="text-xs text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam perferendis, quia aliquid et reiciendis deserunt doloribus soluta accusamus vero non impedit praesentium molestiae omnis nobis!</p>
                        </div>
                        <div id="contributor-logo-and-how-many-had-got-helps" className="mb-2 flex">
                            <div id="picture-of-our-partner-vendors" className="w-fit h-fit mr-2">
                                <div className="flex -space-x-4 rtl:space-x-reverse">
                                    <Image className="w-10 h-10 border-2 border-[#2563eb] rounded-full" src="/file.svg" alt="" 
                                        width={10}
                                        height={10}
                                    />    
                                    <Image className="w-10 h-10 border-2 border-[#2563eb] rounded-full" src="/window.svg" alt="" 
                                        width={10}
                                        height={10}
                                    /> 
                                    <Image className="w-10 h-10 border-2 border-[#2563eb] rounded-full" src="/vercel.svg" alt="" 
                                        width={10}
                                        height={10}
                                    /> 
                                    <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-[#2563eb] rounded-full hover:bg-gray-600 dark:border-[#2563eb]" href="#">+99</a>
                                </div>
                            </div>
                            <div id="teks-of-how-many-got-help" className="flex items-center">
                                <p className="border-l-1 pl-2 text-xs h-fit">With Over <span className="font-bold"> 99+</span> Contributor's</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </>
    )
}