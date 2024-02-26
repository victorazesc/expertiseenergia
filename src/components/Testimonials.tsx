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

    const [index, setIndex] = useState(0)

    function handleSlide(action: string) {
        if (action === "previous") {
            setIndex(index - 1)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <>
            <span id="our-clients"></span>
            <section className="bg-neutral-50">
                <div className="container mx-auto py-28 px-4">
                    <div>
                        <h1 className="text-4xl font-bold py-4 text-center">Veja o depoimento de quem ja investiu</h1>
                        <h4 className="text-2xl text-center">Como nossos clientes reduziram suas contas de 4 digitos para 3 digitos</h4>
                    </div>
                    <div className="flex flex-wrap justify-between items-center">
                        <div onClick={() => handleSlide("previous")} style={{ visibility: index !== 0 ? 'visible' : 'hidden' }} className="rounded-full w-12 h-12 bg-neutral-200 flex items-center justify-center">
                            <img src="images/chevron-left.svg" alt="seta para esquerda" />
                        </div>
                        <Card index={index} />
                        <div onClick={() => handleSlide("next")} style={{ visibility: index != testimonials.length - 1 ? 'visible' : 'hidden' }} className="rounded-full w-12 h-12 bg-neutral-200 flex items-center justify-center">
                            <img src="images/chevron-right.svg" alt="seta para direita" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

    interface ICard {
        index: number
    }
    function Card({ index }: ICard) {

        const { quote, alt, direction, name, rangeValue, src } = testimonials[index]

        return (

            <div className="flex items-center flex-col w-3/4">
                <img className="pt-8" src="images/quotes.svg" alt="Aspas" />
                <h1 className="text-4xl max-w-2xl text-center py-16">{quote}</h1>

                <div className="flex justify-between items-center bg-blue-500 py-4 px-4 sm:px-12 rounded-2xl gap-4 sm:gap-8" onClick={() => { showVideoModal(alt, direction) }}>
                    <div>
                        <div className="w-24 h-24 bg-cover rounded-full" style={{ backgroundImage: `url(${src})` }}></div>
                    </div>
                    <div className="w-2/3">
                        <p className="font-bold text-white">{name}</p>
                        <p className="font-medium text-white">As contas foram de R${rangeValue[0]} para menos de R${rangeValue[1]}</p>
                    </div>
                    <img src="images/youtube.svg" width={40} alt="youtube" />
                </div>
            </div>
        )
    }
}
