"use client"
import Head from "next/head"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function Home() {
  const [login, setLogin] = useState("")
  const [parol, setParol] = useState("")
  const [hidden, setHidden] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (login === "kamron" && parol === "kamron04") {
      setHidden(false)
      setLogin("")
      setParol("")
      router.push("/salom")
    } else {
      setHidden(true)
    }
  }
  return (
    <>
      <Head>
        <title>Login | Clinika</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>
      <div className="bg-[#E7E7E7] min-h-screen flex items-center justify-center">
        <div className="bg-[#FFFFFF] flex items-center justify-center rounded-2xl shadow-lg p-10">
          <div className="flex flex-col gap-y-[60px] px-[50px]">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-5">
                <img src="/logo.svg" alt="Logo" />
                <h3 className="font-spaceGrotesk font-bold text-[28px] leading-[35.73px] text-[#000000]">
                  Clinika
                </h3>
              </div>
              <p className="font-spaceGrotesk font-medium text-[16px] leading-[20.42px] text-[#000000]">
                Hisobingizga kirish uchun hisob ma'lumotlaringizni kiriting!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-[17px]">
                <div className="flex flex-col gap-y-[5px]">
                  <label
                    className="font-poppins font-medium text-[16px] leading-6 text-[#000000]"
                    htmlFor="login"
                  >
                    Login
                  </label>
                  <div className="flex items-center justify-between border-[1px] border-[#D5D5D5] p-[15px] rounded-[10px] focus-within:border-[#000000]">
                    <input
                      onChange={(e) => setLogin(e.target.value)}
                      value={login}
                      required
                      id="login"
                      type="text"
                      placeholder="Shavkatjon"
                      className="w-[90%] outline-none bg-transparent font-poppins font-normal text-[14px] leading-[21px] text-[#000000]"
                    />
                    <img
                      className="cursor-pointer"
                      src="/verify.svg"
                      alt="Verify"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                  <div className="flex flex-col gap-y-[5px]">
                    <label
                      className="font-poppins font-medium text-[16px] leading-6 text-[#000000]"
                      htmlFor="password"
                    >
                      Parol
                    </label>
                    <div className={hidden ? "flex items-center justify-between border-[1px] border-[#D5D5D5] p-[15px] rounded-[10px] focus-within:border-[#000000]" : "flex items-center justify-between border-[1px] border-[#D5D5D5] p-[15px] rounded-[10px] focus-within:border-[#C24B51]"}>
                      <input
                        onChange={(e) => setParol(e.target.value)}
                        value={parol}
                        required
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Parol"
                        className="w-[90%] outline-none bg-transparent font-poppins font-normal text-[14px] leading-[21px] text-[#000000]"
                      />
                      <img
                        className="cursor-pointer"
                        src={showPassword ? "/eye-off.svg" : "/eye.svg"}
                        alt="Show password"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </div>
                  <p
                    className={
                      hidden
                        ? "font-spaceGrotesk font-normal text-[14px] leading-[17.86px] text-[#B1B1B1]"
                        : "hidden"
                    }
                  >
                    <span className="text-[#C24B51]">Parol noto'g'ri. </span>
                    Iltimos, qayta urinib ko'ring.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#71AB65] py-[14px] rounded-[10px] font-poppins font-medium text-[16px] leading-6 text-[#FFFFFF] hover:bg-[#5e924e] transition-colors"
              >
                Kirish
              </button>
            </form>
          </div>
          <div className="hidden lg:block">
            <img src="/login-img.svg" alt="Login illustration" />
          </div>
        </div>
      </div>
    </>
  )
}
