export default function Detail({detail, setDetail}) {
    return (
        <div className={detail ? "z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] flex flex-col rounded-[10px] border border-[#CFCFCF]" : "hidden"}>
            <div className="flex items-center justify-between p-5 border-b border-b-[#CFCFCF]">
                <div className="flex items-center gap-x-[15px]">
                    <div className="bg-[#71AB651A] p-3 rounded-full border border-[#71AB65]">
                        <img src="/med.svg" alt="svg img" />
                    </div>
                    <h3 className="font-spaceGrotesk font-medium text-[20px] leading-[25.52px] text-[#71AB65]">Qabul tafsiloti</h3>
                </div>
                <button onClick={() => setDetail(!detail)} className="bg-[#FBFBFB] p-2 rounded-[8px] border border-[#E9E9E9]"><img src="/x-mark.svg" alt="svg img" /></button>
            </div>
            <div className="flex flex-col gap-y-[30px] py-[30px] px-5">
                <div className="flex items-start gap-x-5">
                    <div className="bg-[#FDFDFD] p-2 rounded-full border border-[#CFCFCF]">
                        <img src="/file.svg" alt="svg img" />
                    </div>
                    <div className="flex flex-col gap-y-[30px]">
                        <div className="grid grid-cols-2 gap-x-[80px] gap-y-[30px] p-5 rounded-[10px] border border-[#CFCFCF]">
                            <div className="flex items-center gap-x-[15px]">
                                <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                    <img src="/steth.svg" alt="svg img" />
                                </div>
                                <div className="flex flex-col gap-y-[5px]">
                                    <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                    <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-[15px]">
                                <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                    <img src="/steth.svg" alt="svg img" />
                                </div>
                                <div className="flex flex-col gap-y-[5px]">
                                    <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                    <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-[15px]">
                                <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                    <img src="/steth.svg" alt="svg img" />
                                </div>
                                <div className="flex flex-col gap-y-[5px]">
                                    <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                    <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-[15px]">
                                <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                    <img src="/steth.svg" alt="svg img" />
                                </div>
                                <div className="flex flex-col gap-y-[5px]">
                                    <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                    <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-[15px]">
                                <div className="bg-[#FDFDFD] p-2 rounded-[8px] border border-[#E9E9E9]">
                                    <img src="/steth.svg" alt="svg img" />
                                </div>
                                <div className="flex flex-col gap-y-[5px]">
                                    <h4 className="font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000]">Xizmat turi</h4>
                                    <span className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#B3B3B3]">Uzi Opka</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <button className="bg-[#71AB651A] flex items-center gap-x-[10px] px-[30px] py-[14px] rounded-[8px] border border-[#71AB65] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#71AB65]">
                                <span>Saqlash</span>
                                <img src="/check.svg" alt="svg img" />
                            </button>
                            <button className="bg-[#2382C31A] flex items-center gap-x-[10px] px-[30px] py-[14px] rounded-[8px] border border-[#2382C3] font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#2382C3]">
                                <span>Pechat</span>
                                <img src="/printer.svg" alt="svg img" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}