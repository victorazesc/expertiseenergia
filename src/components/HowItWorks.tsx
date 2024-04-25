import Image from "next/image"
export function HowItWorks() {
    return (
        <>
            <div className="flex flex-col py-20">
                <span id="how-it-works"></span>
                <section className="container mx-auto py-20 text-center">
                    <h5 className="text-2xl">Por que Energia Solar?</h5>
                    <h4 className="text-3xl font-bold py-4">Investimento inteligente que ajuda o planeta</h4>
                </section>
                <section className="container mx-auto grid grid-cols-1 sm:grid-cols-3 text-xl px-4 gap-4">
                    <div className="text-justify flex flex-col items-center bg-[#35b6aa33] py-8 px-8 rounded-3xl">

                        <Image src="/images/piggy-bank.svg" width={140} height={140} alt="porquinho" className="py-6" />
                        <p className="">
                            Desde 2012, a energia solar já gerou no Brasil mais de R$ 170 bilhões em investimentos. Um projeto bem dimensionado e corretamente instalado pode gerar um rendimento anual de até 40%, superando qualquer aplicação financeira atualmente disponível no mercado.
                        </p>
                    </div>
                    <div className="text-justify flex flex-col items-center bg-[#35b6aa33] py-8 px-8 rounded-3xl">
                        <Image src="/images/profits-analytics.svg" width={120} height={120} alt={"grafico"} className="py-6" />
                        <p className="">
                            Valorize sua propriedade! Milhões de pessoas já instalaram painéis solares nos seus telhados. Junte-se a esse movimento!
                            Estudos apontam que um sistema de energia solar aumenta em 5,1% 0 valor de venda de um imóvel.
                        </p>
                    </div>
                    <div className="text-justify flex flex-col items-center bg-[#35b6aa33] py-8 px-8 rounded-3xl">
                        <Image src="/images/global-globe.svg" width={120} height={120} alt="globo" className="py-6" />
                        <p className="">
                            Valorize sua propriedade! Milhões de pessoas já instalaram painéis solares nos seus telhados. Junte-se a esse movimento!
                            Estudos apontam que um sistema de energia solar aumenta em 5,1% 0 valor de venda de um imóvel.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}