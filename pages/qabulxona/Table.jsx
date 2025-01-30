export default function Table() {
    return (
        <table className="w-full table-fixed">
            <thead className="border-b border-b-[#CFCFCF] py-5 font-spaceGrotesk font-bold text-[16px] leading-[20.42px] text-[#000000] text-left">
                <tr className="w-full">
                    <th className="px-[12.5px] py-3 w-1/12">#</th>
                    <th className="px-4 py-3 w-1/12">ID</th>
                    <th className="px-4 py-3 w-3/12">F.I.O</th>
                    <th className="px-4 py-3 w-2/12">Xizmat turi</th>
                    <th className="px-4 py-3 w-2/12">Doktor ismi</th>
                    <th className="px-4 py-3 w-2/12">Summasi</th>
                    <th className="px-4 py-3 w-2/12 text-center">O’chird raqami</th>
                    <th className="px-4 py-3 w-2/12">Xona raqami</th>
                </tr>
            </thead>
            <tbody className="font-spaceGrotesk font-normal text-[16px] leading-[20.42px] text-[#000000]">
                <tr className="relative">
                    <td className="py-5 w-1/12 text-[#71AB65]">
                        <span className="py-[6px] px-[12.5px] bg-[#71AB651A] rounded-full border border-[#71AB65]">1</span>
                    </td>
                    <td className="px-4 py-5 w-2/12">12345</td>
                    <td className="px-4 py-5 w-3/12">Ziyayev Rovshan Toirovich</td>
                    <td className="px-4 py-5 w-2/12">Uzi Opka</td>
                    <td className="px-4 py-5 w-2/12">Rizaev Shovkat</td>
                    <td className="px-4 py-5 w-2/12">200.000 Sum</td>
                    <td className="px-4 py-5 w-2/12 text-[#E49B18] text-center">
                        <span className="bg-[#E49B181A] py-[6px] px-[7.5px] rounded-[4px] border border-[#E49B18]">41</span>
                    </td>
                    <td className="px-4 py-5 w-1/12 text-[#7185D4]">
                        <span className="bg-[#7185D41A] py-[6px] px-[7.5px] rounded-[4px] border border-[#7185D4]">41</span>
                        <button className="bg-[#2382C3] p-1 rounded-[4px] absolute top-1/2 -translate-y-1/2 right-0">
                            <img className="w-full" src="/printer-white.svg" alt="" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}