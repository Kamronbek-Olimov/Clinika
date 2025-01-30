export default function Add({detail, setDetail, tableHidden, setTableHidden}) {
    return (
        <div className={tableHidden ? "relative border border-[#CFCFCF] rounded-[10px] p-10 flex flex-col gap-y-10 min-h-screen" : "border border-[#CFCFCF] rounded-[10px] p-10 hidden flex-col gap-y-10 min-h-screen"}>
            <div className="flex flex-col gap-y-[30px]">
                <div className="flex items-center gap-x-5">
                    <button onClick={() => setTableHidden(!tableHidden)} className="bg-transparent p-3 border border-[#CFCFCF] rounded-[4px] "><img src="/arrow-left.svg" alt="svg img" /></button>
                    <h4 className="font-spaceGrotesk font-medium text-[24px] leading-[30.62px] tracking-[2%] text-[#000000]">Qabulxonaga qo’shish</h4>
                </div>
                <hr className="bg-[#CFCFCF] w-full h-[1px] rounded-[2px]" />
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
                <div className="flex flex-col gap-y-[10px]">
                    <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Ism</label>
                    <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                        <button><img src="/profile.svg" alt="svg img" /></button>
                        <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="Ravshan" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                    <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Nosirov</label>
                    <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                        <button><img src="/profile.svg" alt="svg img" /></button>
                        <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="Nosirov" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                    <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turlari</label>
                    <div className="flex gap-x-[10px] justify-between">
                        <div className="w-full flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                            <button><img src="/steth.svg" alt="svg img" /></button>
                            <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="Uzi: Opka" />
                        </div>
                        <button className="relative p-3 rounded-[8px] border border-[#E9E9E9]">
                            <img src="/arrow-down.svg" alt="svg img" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                    <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Summa</label>
                    <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                        <button><img src="/coin.svg" alt="svg img" /></button>
                        <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="200.000 Sum" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                    <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Shifokor</label>
                    <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                        <button><img src="/plus-doctor.svg" alt="svg img" /></button>
                        <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="Shavkat" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                    <label className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Ochird raqami</label>
                    <div className="flex items-center gap-x-[10px] px-5 py-3 border border-[#E9E9E9] rounded-[8px]">
                        <button><img src="/num.svg" alt="svg img" /></button>
                        <input className="outline-none font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]" type="text" placeholder="41-raqam" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-x-5">
                <button onClick={() => setDetail(!detail)} className="bg-[#71AB651A] flex items-center gap-x-[10px] px-[30px] py-[14px] rounded-[8px] border border-[#71AB65]">
                    <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#71AB65]">Tafsilot</span>
                    <img src="/arrow-left-green.svg" alt="svg img" />
                </button>
                <button className="bg-[#C24B511A] flex items-center gap-x-[10px] px-[30px] py-[14px] rounded-[8px] border border-[#C24B51]">
                    <span className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#C24B51]">Bekor qilish</span>
                    <img src="/x-mark-red.svg" alt="svg img" />
                </button>
            </div>
        </div>
    )
}