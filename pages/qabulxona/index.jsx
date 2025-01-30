import Navbar from "@/components/Navbar"
import Head from "next/head"
import { useEffect, useState } from "react"
import axios from "axios"
import Add from "./Add"
import Detail from "./Detail"
import Table from "./Table"
export default function Qabulxona() {
    const API = process.env.NEXT_PUBLIC_API
    useEffect(() => {
        axios.get(`${API}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])
    const [tableHidden, setTableHidden] = useState(false)
    const [detail, setDetail] = useState(false)
    return (
        <>
            <Head>
                <title>Qabulxona bo'limi | Clinika</title>
                <link rel="icon" href="/logo.svg"></link>
            </Head>
            <div className={`bg-[#FFFFFF] px-[80px] py-[30px] flex flex-col gap-y-[30px] relative ${detail ? "after:bg-[#99999986] after:top-0 after:absolute after:left-0 after:w-full after:h-full after:content-[''] after:z-40" : ""}`}>
                <Navbar />
                <div className={tableHidden ? "border border-[#CFCFCF] rounded-[10px] p-10 hidden flex-col gap-y-10 justify-between min-h-screen" : "border border-[#CFCFCF] rounded-[10px] p-10 flex flex-col gap-y-10 justify-between min-h-screen"}>
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
                                <button onClick={() => setTableHidden(!tableHidden)} className="bg-[#71AB65] p-[12.5px] rounded-[8px]">
                                    <img src="/add.svg" alt="svg img" />
                                </button>
                            </div>
                            <hr className="bg-[#CFCFCF] w-full h-[1px] rounded-[2px]" />
                        </div>
                        <Table/>
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
                <Add detail={detail} setDetail={setDetail} tableHidden={tableHidden} setTableHidden={setTableHidden} />
                <Detail detail={detail} setDetail={setDetail} />
            </div>
        </>
    )
}