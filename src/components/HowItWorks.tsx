import Image from "next/image";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export function HowItWorks() {
  return (
    <>
      <div className="flex flex-col py-16 px-6 gap-12">
        <span id="how-it-works"></span>
        <section className="justify-between flex items-center container mx-auto py-20 text-center">
          <div>
            <h5 className="md:text-left text-4xl font-bold py-0">
              Temos a melhor solução para você.
            </h5>
            <h4 className="md:text-left text-xl py-4">
              Conheça as diferentes formas de economizar que a Expertise
              oferece:
            </h4>
          </div>
          <a
            href="#simulate-form"
            className="bg-[#169576] text-white p-2 rounded-full px-8 items-center hidden md:block h-10 w-60"
          >
            SIMULAR ECONOMIA
          </a>
        </section>
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 text-xl px-4 gap-16">
          <div className="md:text-left text-center flex flex-col items-center bg-[#F5F5F5] rounded-3xl">
            <div className="md:-mx-12 md:-mt-12">
              <Image
                src="/images/PainelSolar.png"
                width={800}
                height={341}
                objectFit="cover"
                alt="painelsolar"
                className="py-6"
              />
            </div>
            <div className="py-8 md:px-16 px-6">
              <h5 className="md:text-left text-4xl font-bold py-0">
                Geração de energia no seu imóvel
              </h5>
              <p className="font-bold text-2xl py-4">
                Indicado para imóveis com área de telhado disponível para
                instalação de painéis
              </p>

              <ContentToggle description={`<p>
                  A energia gerada nas placas fotovoltaicas é distribuída pela
                  rede elétrica da casa para ser utilizada imediatamente. O
                  excesso de energia gerada, que não é utilizado, pode ser enviado
                  de volta para a rede elétrica, fazendo o medidor girar para trás
                  e gerando créditos com a companhia elétrica.
                </p>
                <p className="py-4">
                  Com a energia solar suprindo parte ou toda a demanda da casa, a
                  conta de luz diminui significativamente.
                </p>`} />

              <div className="hidden md:block">
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
          </div>

          <div className="md:text-left text-center flex flex-col items-center bg-[#F5F5F5] rounded-3xl">
            <div className="md:-mx-12 md:-mt-12">
              <Image
                src="/images/UsinaSolar.png"
                width={661}
                height={341}
                alt="usinasolar"
                className="py-6"
              />
            </div>
            <div className="py-8 md:px-16 px-6">
              <h5 className="md:text-left text-4xl font-bold py-0">
                Geração de energia na Usina Solar
              </h5>

              <p className="font-bold text-2xl py-4">
                Indicado para imóveis sem área de telhado disponível, como
                apartamentos.
              </p>

              <ContentToggle description={`<p>
                  A energia é produzida nas suas placas, instaladas em um de
                  nossos parques solares. Após a geração, é injetada na rede da
                  distribuidora de energia, assim, convertida em créditos que são
                  abatidos do consumo dos usuários do parque solar.
                </p>
                <p className="py-4">
                  Somos responsáveis por toda a operação, manutenção e garantia de
                  eficiência das placas do parque.
                </p>`} />
              <div className="md:block hidden">
                <p>
                  A energia é produzida nas suas placas, instaladas em um de
                  nossos parques solares. Após a geração, é injetada na rede da
                  distribuidora de energia, assim, convertida em créditos que são
                  abatidos do consumo dos usuários do parque solar.
                </p>
                <p className="py-4">
                  Somos responsáveis por toda a operação, manutenção e garantia de
                  eficiência das placas do parque.
                </p>
              </div>

            </div>
          </div>
        </section >
        <section className="container mx-auto grid grid-cols-1 px-4 gap-16 text-xl">
          <div className="flex flex-col gap-y-12">
            <div className="md:text-justify text-center flex flex-col md:flex-row gap-6 p-8 items-center bg-[#F5F5F5] rounded-3xl">
              <div>
                <Image
                  src={"/images/grupo.png"}
                  alt={"Hibrid"}
                  width={509}
                  height={150}
                  className="hidden md:block md:-ml-12 md:-mb-12"
                />
                <Image
                  src={"/images/grupo.png"}
                  alt={"Hibrid"}
                  width={661}
                  height={341}
                  className="md:hidden"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl text font-bold">Sistemas Híbridos</h3>
                <h5 className="text-xl text font-bold">
                  Sua casa livre de quedas de luz e sem dependência da
                  concessionária
                </h5>

                <ContentToggle description={`<p className="font-medium">
                    Unindo a tecnologia das placas fotovoltaicas a baterias de
                    lítio, a Expertise oferece sistemas híbridos residenciais que
                    não te deixam na mão. A energia produzida pelas placas é
                    armazenada direto nas baterias de lítio e distribuída para a
                    sua residência diretamente.
                  </p>`} />

                <div className="md:block hidden">
                  <p className="font-medium">
                    Unindo a tecnologia das placas fotovoltaicas a baterias de
                    lítio, a Expertise oferece sistemas híbridos residenciais que
                    não te deixam na mão. A energia produzida pelas placas é
                    armazenada direto nas baterias de lítio e distribuída para a
                    sua residência diretamente.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:text-justify text-center flex flex-col md:flex-row gap-6 p-8 items-center bg-[#F5F5F5] rounded-3xl">
              <div>
                <Image
                  src={"/images/navio.png"}
                  alt={"Hibrid"}
                  width={409}
                  height={150}
                  className="hidden md:block md:-ml-9 md:-mr-14 md:-mb-12"
                />
                <Image
                  src={"/images/navio.png"}
                  alt={"Hibrid"}
                  width={661}
                  height={341}
                  className="md:hidden"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl text font-bold">Sistemas Náuticos</h3>
                <h5 className="text-xl text font-bold">
                  Energia ininterrupta para marinas e grandes embarcações com
                  tecnologia apropriada
                </h5>
                <ContentToggle description={`<p className="font-medium">
                    A energia é produzida pelas placas fotovoltaicas e armazenada
                    em baterias de lítio, que conectadas ao sistema da Expertise
                    abastecem a embarcação ou marina sem interrupções.
                  </p>`} />

                <div className="md:block hidden">
                  <p className="font-medium">
                    A energia é produzida pelas placas fotovoltaicas e armazenada
                    em baterias de lítio, que conectadas ao sistema da Expertise
                    abastecem a embarcação ou marina sem interrupções.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  );
}


const ContentToggle = ({ description }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div onClick={handleClick} className="md:hidden">
      <div className={isVisible ? 'block' : 'hidden'}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <button onClick={handleClick} className="text-[#169576] font-bold  w-full">
        {!isVisible ? <span className="flex items-center justify-center">Ler mais <BiChevronDown /></span> : <span className="flex items-center justify-center">Ler menos <BiChevronUp /></span>}
      </button>

    </div>
  );
};

