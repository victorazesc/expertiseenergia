import { useState } from "react";


const testimonials = [
    {
        key: 1,
        src: "images/gisele-oshiro-1-1.jpg",
        direction: 'shorts',
        alt: "https://www.youtube.com/embed/Q98hd6snnUo",
        quote: "Eu estou super feliz. Essa é a conta dos meus sonhos!",
        name: "Gisele Oshiro",
        description: "A cliente conta no vídeo que comprou suas próprias placas <b>mesmo morando em apartamento</b>. O investimento que ela fez vai ser pago em poucos anos e ela vai poder continuar usufruindo das contas baixas por muito mais tempo!",
        rangeValue: [2000, 200]
    },
    {
        key: 2,
        src: "images/jose-chaar-1-1.jpg",
        alt: "https://www.youtube.com/embed/t_crBvUaxaE",
        quote: "É o melhor investimento a se fazer, afinal, vamos sempre ter que pagar energia",
        name: "Dr. José Merched Chaar",
        description: "José comenta no vídeo que vai usar a economia dos próximos 25 anos para ter uma <b>qualidade de vida melhor</b>.",
        rangeValue: [1500, 200]
    },
    {
        key: 3,
        src: "images/carlos-oshiro-1-1.jpg",
        alt: "https://www.youtube.com/embed/n1fTA2rIg6c",
        quote: "Tendo sobra de energia nas minhas placas, consigo transferir para onde quiser",
        name: "Carlos Oshiro",
        description: "Carlos explica no vídeo que só usa a energia do parque da Expertise para o seu apartamento e, por isso, às vezes <b>sobra energia na sua reserva</b>. Comenta que a conta não fica zerada por causa dos impostos e que poderá transferir a reserva para outro lugar, já que é patrimônio seu.",
        rangeValue: [1800, 194]
    },
    {
        key: 4,
        src: "images/claudio-guenka-1-1.jpg",
        alt: "https://www.youtube.com/embed/DsUttf79bcA",
        quote: "Vivemos em um momento em que precisamos cada vez mais cooperar com o meio ambiente",
        name: "Cláudio Guenka",
        description: "Cláudio deixa claro no seu depoimento o senso de cooperação - todos os cooperados do parque solar entendem a importância da geração de energia limpa e usufruem do modelo ofertado pela Expertise para benefício de todos.",
        rangeValue: []
    }
]

export function Testimonials({ showVideoModal, mobile }: any) {

    return (
        <>
            <span id="our-clients"></span>
            <section className="bg-neutral-50">
                <div className="container mx-auto py-28 px-4">
                    <div>
                        <h1 className="text-4xl font-bold py-4 text-center">Veja o depoimento de quem ja investiu</h1>
                        <h4 className="text-2xl text-center">Como nossos clientes reduziram suas contas de 4 digitos para 3 digitos</h4>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 text-xl px-4 gap-4 py-12">

                        {testimonials.map((item) => {
                            return (
                                <Card quote={item.quote} direction={item.direction} name={item.name} rangeValue={item.rangeValue} src={item.src} alt={item.alt} description={item.description} />
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )

    interface ICard {
        quote: string
        direction?: string
        name: string
        rangeValue: number[]
        src: string
        alt: string
        description: string
    }
    function Card({ quote, alt, direction, name, rangeValue, src, description }: ICard) {

        return (
            <div className="flex shadow-lg rounded-md px-4 py-4" onClick={() => { showVideoModal(alt, direction) }}>
                <div className="min-w-60 h-72 bg-cover rounded-md mr-4" style={{ backgroundImage: `url(${src})` }}></div>
                <div>
                    <div className="">
                        <p className="font-medium text-xl">{quote}</p>
                        <p className="font-bold py-4">{name}</p>
                        <p className="font-medium text-sm" dangerouslySetInnerHTML={{ __html: description }} />
                        {rangeValue.length > 1 &&
                            <p className="font-bold text-[#35B6AA] py-4 text-base">
                                As contas foram de
                                <br />
                                <b>R${rangeValue[0]}</b> para <b>R${rangeValue[1]}</b>
                            </p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
