import Navbar from "@/components/Navbar"
import Head from "next/head"
export default function Intro() {
    return (
        <>
            <Head>
                <title>Tanitish | Clinika</title>
                <link rel="icon" href="/logo.svg"></link>
            </Head>
            <div className="bg-[#FFFFFF] px-[80px] py-[30px] flex flex-col gap-y-[30px]">
                <Navbar />
                <div className="border border-[#CFCFCF] rounded-[10px] p-10 flex flex-col gap-y-10 justify-between min-h-screen">
                    <div className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-[30px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center border border-[#CFCFCF] rounded-[8px]">
                                    <div className="flex items-center gap-x-[10px] px-5 py-3 border-r-[0.5px] borderl-[#CFCFCF]">
                                        <button><img src="/calendar.svg" alt="svg img" /></button>
                                        <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#BFBFBF]">
                                            <input type="date" className="outline-none" /> dan
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-[10px] px-5 py-3 border-l-[0.5px] borderl-[#CFCFCF]">
                                        <button><img src="/calendar.svg" alt="svg img" /></button>
                                        <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#BFBFBF]">
                                            <input type="date" className="outline-none appearance-none" /> gacha
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5">
                                    <button className="bg-[#71AB65] flex items-center gap-x-[10px] px-5 py-3 rounded-[8px] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#FFFFFF]">
                                        <img src="/doctor.svg" alt="svg img" />
                                        <span>Shifokor</span>
                                        <img src="/down.svg" alt="svg img" />
                                    </button>
                                    <button className="bg-[#71AB65] p-[12.5px] rounded-[8px]">
                                        <img src="/add.svg" alt="svg img" />
                                    </button>
                                </div>
                            </div>
                            <hr className="bg-[#CFCFCF] w-full h-[1px] rounded-[2px]" />
                        </div>
                        <table className="w-full table-fixed">
                            <thead className="border-b border-b-[#CFCFCF] py-5 font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000] text-left">
                                <tr className="w-full">
                                    <th className="py-3 w-1/5">#</th>
                                    <th className="px-4 py-3 w-1/5">Ism</th>
                                    <th className="px-4 py-3 w-1/5">Familiya</th>
                                    <th className="px-4 py-3 w-1/5">Yo'nalishi</th>
                                    <th className="px-4 py-3 w-1/5">Xona raqami</th>
                                </tr>
                            </thead>
                            <tbody className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#000000]">
                                <tr className="relative">
                                    <td className="py-5 w-1/5">
                                        <span className="py-[6px] px-[12.5px] bg-[#71AB651A] rounded-full border border-[#71AB65] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#71AB65]">1</span>
                                    </td>
                                    <td className="px-4 py-5 w-1/5">Shovkat</td>
                                    <td className="px-4 py-5 w-1/5">Nosirov</td>
                                    <td className="px-4 py-5 w-1/5">Kardeolog</td>
                                    <td className="px-4 py-5 w-1/5">
                                        <span className="bg-[#7185D41A] px-[7.5px] py-[6px] rounded-[4px] border border-[#7185D4] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#7185D4]">41</span>
                                        <button className="bg-[#C24B51] p-1 rounded-[4px] absolute right-0 top-1/2 -translate-y-1/2">
                                            <img src="/trash.svg" alt="svg img" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center gap-x-[10px]">
                        <button className="px-[9px] py-[3px] rounded-[4px] border border-[#CFCFCF] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">1</button>
                        <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">2</button>
                        <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">3</button>
                        <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">4</button>
                        <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">5</button>
                        <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">...</button>
                        <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]">10</button>
                        <button className="px-[9px] py-[3px] rounded-[4px] font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#808080]"><img src="/other.svg" alt="svg img" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}