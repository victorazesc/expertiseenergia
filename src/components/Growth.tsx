import Image from "next/image";

export function Growth() {
  const process = [
    {
      id: 1,
      timing: "1 hora",
      image: "/images/calculator.svg",
      title: "Análise de contas",
      description:
        "Analisamos o seu consumo médio dos últimos 12 meses para determinar a potência necessária para o seu projeto.",
        alt: "calculator"
    },
    {
      id: 2,
      timing: "1 dia",
      image: "/images/paper.svg",
      title: "Apresentação da proposta",
      description:
        "Elaboramos uma proposta personalizada que se alinha perfeitamente com as suas necessidades específicas.",
        alt: "paper"
    },
    {
      id: 3,
      timing: "1 dia",
      image: "/images/writing.svg",
      title: "Fechamento de contrato",
      description:
        "Aqui, reforçamos o nosso compromisso em entregar serviços de alta qualidade, respeitando rigorosamente os prazos estabelecidos.",
        alt: "writing"
    },    
    {
      id: 4,
      timing: "10 dias",
      image: "/images/bulb.svg",
      title: "Elaboração de projeto",
      description:
        "Nossa equipe de engenharia desenvolve um projeto personalizado para garantir nossa aprovação junto à concessionária de energia.",
        alt: "bulb"
    },    
    {
      id: 5,
      timing: "20 dias",
      image: "/images/checkit.svg",
      title: "Homologação da concessionária",
      description:
        "A distribuidora de energia avalia e aprova nosso projeto para instalação, garantindo segurança e eficiência.",
        alt: "checkit"
    },    
    {
      id: 6,
      timing: "5 dias",
      image: "/images/tools.svg",
      title: "Instalação",
      description:
        "Enviamos o kit solar para seu imóvel e realizamos a instalação e ativação, assegurando uma transição tranquila para a energia solar.",
        alt: "tools"
    },
  ];

  return (
    <>
      <span id="our-work"></span>
      <section className="bg-[#F5F5F5]">
        <div className="mx-auto container py-12 relative">
          <div className="grid gap-2 grid-rows-2">
            <h5 className="text text-4xl text-center font-bold">
              Energia limpa em 45 dias.
            </h5>
            <p className="font-semibold text-lg text-center">
              A Expertise segue um processo claro e organizado para o seu
              projeto:
            </p>
          </div>
          <div className="flex flex-col items-start ml-48 mr-48 ">
            {process.map((item) => (
              <div>
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <p className="font-bold w-12 text-xs text-[#21965E]">{item.timing}</p>
                  </div>
                  <div className="justify-center flex flex-col items-center w-24 relative">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={70}
                      height={70}
                    ></Image>
                    <span className="border h-6 absolute -bottom-3"></span>
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  interface ICard {
    title: string;
    description: string;
  }

  function Card({ title, description }: ICard) {
    return (
      <div>
        <div className=" flex gap-4">
          <div className="border-l-8 border-sky-500 rounded-full"></div>
          <div>
            <h1 className="text-6xl font-bold py-4">{title}</h1>
            <h4 className="text-2xl">{description}</h4>
          </div>
        </div>
      </div>
    );
  }
}
