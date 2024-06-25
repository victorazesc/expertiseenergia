import Image from "next/image";

export function Purpose({ }) {
  const images = [
    {
      alt: "placas solares em telhado",
      src: "/images/Foto 1.svg",
    },
    {
      alt: "homem",
      src: "/images/Foto 2.svg",
    },
    {
      alt: "pessoas na expertise",
      src: "/images/Foto 3.svg",
    },
    {
      alt: "visão de cima",
      src: "/images/Foto 4.svg",
    },
    {
      alt: "placas solares",
      src: "/images/Foto-5.jpeg",
    },
  ];
  return (
    <>
      <section>
        <div className="container mx-auto grid justify-between gap-6 md:grid-cols-2 py-16 px-8 md:px-16">
          <div>
            <p className="text-center md:text-left">Conheça nosso trabalho:</p>
            <h2 className="text-5xl font-bold text-center md:text-left">Somos experts no que fazemos.</h2>
            <p className="md:hidden text-center pt-6 px-6">A Expertise Solar está em constante crescimento desde 2017.</p>
            <div className="flex items-center pt-6">
              <div className="flex flex-col gap-4 py-12">
                <p className="hidden md:block">A Expertise Solar está em constante crescimento desde 2017.</p>

                <div className="bg-[#F5F5F5] md:p-6 p-4 rounded-2xl">
                  <p className="font-bold text-[#21965E] text-right md:text-left">16 parques solares</p>
                  <p className="hidden md:block">Com usinas fotovoltaicas instaladas em solo na BR-174 e AM-010</p>
                </div>
                <div className="bg-[#F5F5F5] md:p-6 p-4 rounded-2xl">
                  <p className="font-bold text-[#21965E] text-right md:text-left">+30.000 placas solares</p>
                  <p className="hidden md:block">Instaladas em coberturas de residências e empresas em Manaus</p>
                </div>
                <div className="bg-[#F5F5F5] md:p-6 p-4 rounded-2xl">
                  <p className="font-bold text-[#21965E] text-right md:text-left">+2.000 clientes felizes</p>
                </div>
                <div className="pt-10 hidden md:block">
                  <a href="#simulate-form" type="button" className="!inline-flex !w-auto !px-6" >simule o seu projeto com a expertise</a>
                </div>
              </div>
              <div>
                <Image src="/images/Frame-47.png" alt="check" className='block md:hidden' width={250} height={340} />
              </div>
            </div>
          </div>
          <div>
            <Image src="/images/Frame-46.png" alt="check" className='md:block hidden' width={600} height={340} />
          </div>
        </div>
      </section>
      <section className="container mx-auto flex items-left text-center md:text-left flex-col py-20 px-4">
        <h1 className="md:text-5xl text-3xl font-bold">Nosso propósito é cooperar.</h1>

        <p className="py-2 text-lg">
          Todos os projetos da Expertise são executados com as premissas de
          bem-estar, inovação, sustentabilidade e tecnologia. <br />
          Estamos revolucionando o cenário atual do consumo de energia,
          possibilitando o consumo de energia limpa com praticidade e segurança.
        </p>
        <div className="container mx-auto grid md:grid-cols-5 grid-cols-2 py-8 pb-2 gap-2">
          {images.map((item, _index) => (
            <>
              {
                images.length - 1 !== _index ?
                  <div
                    key={_index}
                    className="rounded-2xl overflow-hidden relative md:w-24 md:h-24 h-32 w-60 lg:w-72 xl:w-60 lg:h-60"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="none"
                      className="rounded-2xl"
                    />
                  </div>

                  :

                  <div
                    key={_index}
                    className="rounded-2xl hidden md:block overflow-hidden relative md:w-24 md:h-24 h-30 w-60 lg:w-72 xl:w-60 pt-2 px-1 pb-3 lg:h-60"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={240}
                      height={240}
                      className="rounded-2xl"
                      style={{ height: '100%' }}
                    />
                  </div>
              }

            </>
          ))}
        </div>

        <div

          className="rounded-2xl overflow-hidden relative w-full md:hidden h-32"
        >
          <Image
            src={images[4].src}
            alt={images[4].alt}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div>
          <p className="pb-4 pt-8">Nos acompanhe nas redes sociais para saber mais:</p>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <a href="https://www.instagram.com/expertisesolar" target="_blank">
              <Image src="/images/instagram.png" width={50} height={32} alt={"instagram"} /></a>
            <a href="https://www.facebook.com/expertisesolar" target="_blank">
              <Image src="/images/Frame-150-1.png" width={56} height={32} alt="facebook" /></a>
            <a href="https://www.youtube.com/@expertiseenergia" target="_blank">
              <Image src="/images/youtube.png" width={56} height={32} alt="youtube" /></a>
          </div>
        </div>

      </section>
      <section className="bg-[#2F3F3A] ">
        <div className="max-w-2xl py-16 flex items-center justify-center gap-4 mx-auto text-white">
          <div><Image src="/images/money.png" alt="check" className='md:block hidden' height={160} width={250} /></div>
          <div>
            <h2 className="text-4xl pb-4">Não fique para trás.</h2>
            <p className="pb-4">Comece a economizar hoje mesmo. Transforme sua casa em uma usina de energia limpa e reduza sua conta de luz.</p>
            <a href="#" type="button" className="!inline-flex !w-auto !px-6" >Simule sua economia na conta de luz</a>
          </div>
        </div>
      </section>
    </>
  );
}
