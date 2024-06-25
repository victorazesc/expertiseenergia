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
      <section className="bg-white px-6 py-12">
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
          <div className="block md:max-w-5xl max-w-md mx-auto ">
            {process.map((item, index) => (
              <div className="flex flex-row items-center gap-2 pb-2">
                <div>
                  <p className="font-bold md:w-12 w-20 md:text-xs text-[#21965E] text-right">{item.timing}</p>
                </div>
                <div className="block relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={84}
                    height={84}
                  ></Image>
                  {process.length - 1 !== index && <span className="border h-8 absolute left-9 -bottom-5"></span>}
                </div>
                <div className="flex flex-col w-full">
                  <h3 className="font-bold md:text-md text-lg">{item.title}</h3>
                  <p className="hidden md:block">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto border border-[#BCD2C1] rounded-3xl flex items-center px-6 py-3 mt-4">
            <div className="font-bold md:w-12 w-20 text-right md:text-xs text-[#21965E]">Até 45 dias</div>
            <div> <Image
              src={"/images/house-check.svg"}
              alt={'house'}
              width={70}
              height={70}
            /></div>
            <div className="font-bold md:text-md text-lg">Projeto entregue e instalado</div>
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
