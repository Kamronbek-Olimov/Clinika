import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
export default function Report() {
    return (
        <>
            <Head>
                <title>Hisobot bo'limi | Clinika</title>
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
                                <div className="flex items-center gap-x-[30px]">
                                    <button className="bg-[#71AB65] flex items-center gap-x-[10px] px-5 py-3 rounded-[8px] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#FFFFFF]">
                                        <img src="/doctor.svg" alt="svg img" />
                                        <span>Shovkat</span>
                                        <img src="/down.svg" alt="svg img" />
                                    </button>
                                    <button className="bg-[#E9E9E91A] flex items-center gap-x-[10px] px-5 py-3 rounded-[8px] border border-[#CFCFCF] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#CFCFCF]">
                                        <img src="/steth.svg" alt="svg img" />
                                        <span>Servis</span>
                                        <img src="/arrow-down.svg" alt="svg img" />
                                    </button>
                                </div>
                            </div>
                            <hr className="bg-[#CFCFCF] w-full h-[1px] rounded-[2px]" />
                        </div>
                        <table className="w-full table-fixed">
                            <thead className="border-b border-b-[#CFCFCF] py-5 font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000] text-left">
                                <tr className="w-full">
                                    <th className="py-3 w-1/6">Doktor ismi</th>
                                    <th className="px-4 py-3 w-1/6">Xizmat turi</th>
                                    <th className="px-4 py-3 w-1/6">Narxi</th>
                                    <th className="px-4 py-3 w-1/6">Xizmat donasi</th>
                                    <th className="px-4 py-3 w-1/6">Summasi</th>
                                    <th className="px-4 py-3 w-1/6">Sana</th>
                                </tr>
                            </thead>
                            <tbody className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#000000]">
                                <tr>
                                    <td className="py-5 w-1/6">Rizaev Shovkat</td>
                                    <td className="px-4 py-5 w-1/6">Uzi Opka</td>
                                    <td className="px-4 py-5 w-1/6">200.000 Sum</td>
                                    <td className="px-4 py-5 w-1/6">10</td>
                                    <td className="px-4 py-5 w-1/6">2.000.000 Sum</td>
                                    <td className="px-4 py-5 w-1/6">16.12.2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-between">
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
                        <div className="bg-[#E9E9E91A] px-5 py-3 rounded-[8px] border border-[#CFCFCF] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#CFCFCF]">Umumiy summa 2.000.000 Sum</div>
                    </div>
                </div>
            </div>
        </>
    )
}