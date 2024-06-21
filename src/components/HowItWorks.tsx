import Image from "next/image";

export function HowItWorks() {
  return (
    <>
      <div className="flex flex-col py-4">
        <span id="how-it-works"></span>
        <section className="justify-between flex items-center container mx-auto py-20 text-center">
          <div>
            <h5 className="text-left text-4xl font-bold py-0">
              Temos a melhor solução para você.
            </h5>
            <h4 className="text-left text-2xl py-4">
              Conheça as diferentes formas de economizar que a Expertise
              oferece:
            </h4>
          </div>
          <a
            href="#simulate-form"
            className="bg-[#169576] text-white p-2 rounded-full px-8 items-center h-10 w-60"
          >
            SIMULAR ECONOMIA
          </a>
        </section>
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 text-xl px-4 gap-16">
          <div className="text-justify flex flex-col items-center bg-[#F5F5F5] rounded-3xl">
            <div className="-mx-12 -mt-12">
              <Image
                src="/images/PainelSolar.png"
                width={800}
                height={341}
                objectFit="cover"
                alt="painelsolar"
                className="py-6"
              />
            </div>
            <div className="py-8 px-16">
              <h5 className="text-left text-4xl font-bold py-0">
                Geração de energia no seu imóvel
              </h5>
              <p className="font-bold text-2xl py-4">
                Indicado para imóveis com área de telhado disponível para
                instalação de painéis
              </p>
              <p>
                A energia gerada nas placas fotovoltaicas é distribuída pela
                rede elétrica da casa para ser utilizada imediatamente. O
                excesso de energia gerada, que não é utilizado, pode ser enviado
                de volta para a rede elétrica, fazendo o medidor girar para trás
                e gerando créditos com a companhia elétrica.
              </p>
              <p className="py-4">
                Com a energia solar suprindo parte ou toda a demanda da casa, a
                conta de luz diminui significativamente.
              </p>
            </div>
          </div>
          <div className="text-justify flex flex-col items-center bg-[#F5F5F5] rounded-3xl">
            <div className="-mx-12 -mt-12">
              <Image
                src="/images/UsinaSolar.png"
                width={661}
                height={341}
                alt="usinasolar"
                className="py-6"
              />
            </div>
            <div className="py-8 px-16">
              <h5 className="text-left text-4xl font-bold">
                Geração de energia na Usina Solar
              </h5>
              <p className="font-bold text-2xl py-4">
                Indicado para imóveis sem área de telhado disponível, como
                apartamentos.
              </p>
              <p>A energia é produzida nas suas placas, instaladas
                em um de nossos parques solares. Após a geração, é injetada na
                rede da distribuidora de energia, assim, convertida em créditos
                que são abatidos do consumo dos usuários do parque solar.</p>
                <p className="py-4">Somos responsáveis por toda a operação, manutenção e garantia de eficiência das placas do parque.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
