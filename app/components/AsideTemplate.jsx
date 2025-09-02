import Image from "next/image";

export default function AsideTemplate() {
    return (
        <aside id="content" className="flex-grow flex flex-col bg-[#2563eb] md:w-1/2 md:justify-center">
            <div id="container" className="flex flex-col justify-evenly flex-grow p-6 md:justify-center md:flex-grow-0 md:min-h-1/2 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
                <div id="image-logo-and-title" className="mt-2 mb-2 md:mb-0 md:mt-0 flex items-center">
                    <Image id="logo" src="/vercel.svg" alt="" width={30} height={30} className="rounded p-1 md:p-0"/>
                    <h2 className="text-xl font-semibold text-white md:text-2xl h-fit ml-2">Qonnect By Dutaqu</h2>
                </div>
                <div id="content-description" className="mb-2 mt-2 space-y-2 md:space-y-6 md:mt-10 lg:mt-12 xl:14 2xl:mt-16 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
                    <h1 className="text-2xl font-bold text-white md:text-3xl">Helping other's with our connection's.</h1>
                    <p className="text-xs text-white md:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam perferendis, quia aliquid et reiciendis deserunt doloribus soluta accusamus vero non impedit praesentium molestiae omnis nobis!</p>
                </div>
                <div id="contributor-logo-and-how-many-had-got-helps" className="mb-2 mt-2 md:mb-0 md:mt-0 flex md:items-center">
                    <div id="picture-of-our-partner-vendors" className="w-fit h-fit mr-2">
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                            <Image className="w-10 h-10 border-2 border-[#2563eb] rounded-full" src="/vercel.svg" alt=""
                                width={10}
                                height={10}
                            />
                            <Image className="w-10 h-10 border-2 border-[#2563eb] rounded-full" src="/vercel.svg" alt=""
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
                        <p className="text-white border-l-1 pl-2 text-xs h-fit md:text-sm">With Over <span className="font-bold"> 99+</span> Contributor's</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}