import Image from "next/image";

export function Purpose({}) {
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
      src: "/images/Foto 5.svg",
    },
  ];
  return (
    <>
      <section className="container mx-auto flex items-left flex-col py-20 px-4">
        <h1 className="text-5xl font-bold">Nosso propósito é cooperar.</h1>

        <p className="py-2 text-lg font-semibold">
          Todos os projetos da Expertise são executados com as premissas de
          bem-estar, inovação, sustentabilidade e tecnologia. <br />
          Estamos revolucionando o cenário atual do consumo de energia,
          possibilitando o consumo de energia limpa com praticidade e segurança.
        </p>
        <div className="container mx-auto grid grid-cols-5 py-8 gap-2">
          {images.map((item) => {
            return (
              <div
                key={item.alt}
                className="rounded-2xl bg-cover bg-center overflow-hidden relative w-24 h-24 lg:w-72 xl:w-60 lg:h-60"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill={true}
                  className="object-cover"
                ></Image>
              </div>
            );
          })}
        </div>
        <div>
          <Image src={"/images/socials.svg"} alt={"socials"} width={430} height={104}></Image>
        </div>
      </section>
    </>
  );
}
