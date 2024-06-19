import Image from "next/image"
import { IoMdArrowDown } from "react-icons/io";

export function Hero() {
    return (
        <section className="pt-[80px] bg-cover relative font-bold text-black" >
            <div className="container mx-auto px-3 flex flex-row items-center hero">
                <div><Image src="/images/Frame-4.png" alt={"down"} width={717} height={451}></Image></div>
                <div className="w-full lg:w-1/2 xl:w-1/2 text-center sm:text-left pb-28">
                    <div><Image src="/images/Vector.svg" alt={"logo"} width={66} height={70}></Image></div>
                    <h1 className="text-4xl lg:text[40px] xl:text[40px] w-96">A energia solar chegou para mudar sua vida.</h1>
                    <p className="text-lg font-normal py-4 w-80">Conheça as soluções da Expertise Solar e transforme a sua <b>casa, apartamento</b> ou <b>negócio</b> em uma usina de economia.</p>
                    <p className="text-lg font-normal py-4 w-80">Enquanto valoriza o seu imóvel, você economiza até <span style={{ background: "#BBFFDE" }}>95% da conta de luz.</span></p>
                    <a href="#simulate-form" className="bg-white text-center text-[#00634B] p-2 rounded-full px-4 flex items-center w-60">FAÇA UMA SIMULAÇÃO<IoMdArrowDown /></a>
                </div>
            </div>
        </section>
    )
}
