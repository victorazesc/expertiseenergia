import Image from "next/image"
export function Advantages() {
    const advantages = [
        {
            src: "images/money.svg",
            title: "Aumento no valor do imóvel",
            description: "Propriedades com energia solar são mais valorizadas no mercado"
        },
        {
            src: "images/piggy-bank.svg",
            title: "Economia de até 90% na conta de luz",
            description: "Reduza drasticamente suas despesas com energia."
        },
        {
            src: "images/transformer-bolt.svg",
            title: "Independência energética",
            description: "Produza sua própria energia e fique imune aos aumentos tarifários."
        },
        {
            src: "images/money-check-dolar.svg",
            title: "Retorno rápido sobre o investimento",
            description: "Veja seu investimento se pagar em poucos anos."
        },
        {
            src: "images/tree.svg",
            title: "Sustentabilidade ambiental",
            description: "Reduza sua pegada de carbono e contribua para um futuro mais verde."
        },
        {
            src: "images/microchip.svg",
            title: "Tecnologia de ponta",
            description: "Atualize-se com o que há de mais moderno em energia limpa."
        }
    ]
    return (
        <>
            <span id="advantages"></span>

            <section className="container mx-auto flex text-center md:text-left flex-col bg-gradient-to-r from-[#A4F4B6] to-[#89EEC4] rounded-3xl px-6 md:px-16 md:py-16 py-6 gap-x-12">
                <div className="gap-2">
                    <div>
                        <h3 className="text-4xl font-bold">Você só ganha.</h3>
                        <p className="text-lg mb-8 pt-2">
                            Entenda como a energia solar pode impactar sua vida também:
                        </p>
                    </div>
                    <div className="md:gap-12 gap-6 container mx-auto grid md:grid-cols-3">
                        {advantages.map((item, _index) =>
                            <div className="text-left flex gap-6 items-center md:block bg-white rounded-3xl md:h-[250px] p-8 shadow-md" key={_index}>
                                <Image
                                    src={item.src}
                                    alt="Money"
                                    className="w-12 h-12 mb-4"
                                    width={54}
                                    height={54}
                                />
                                <h5 className="text-2xl font-bold text-left pb-2">
                                    {item.title}
                                </h5>
                                <p className="text-base text-left hidden md:block">
                                    {item.description}
                                </p>
                            </div>
                        )}

                    </div>
                    <div className="md:pt-16 pt-6 w-full flex justify-center">
                        <a
                            href="#simulate-form"
                            className="bg-[#169576] text-white p-2 rounded-full px-8 items-center w-auto hidden md:inline h-10 uppercase"
                        >
                            Simule o quanto você pode economizar com a expertise
                        </a>
                        <a
                            href="#simulate-form"
                            className="bg-[#169576] text-2xl text-white p-2 rounded-full px-8 w-full md:hidden flex justify-center items-center h-16 uppercase"
                        >
                            SIMULAR MINHA ECONOMIA
                        </a>
                    </div>
                </div>
            </section>
        </>
    )

    interface ICard {
        title: string,
        description: string,
        icon: string
    }
    function Card({ title, description, icon }: ICard) {
        return (
            <div>
                <Image src={icon} width={35} height={35} alt="Cofrinho" />
                <h5 className="font-Oswald font-bold text-lg">{title}</h5>
                <p className="text-lg">
                    {description}
                </p>
            </div>
        )
    }


}