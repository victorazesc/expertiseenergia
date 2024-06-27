import Image from "next/image"
import { FaStar } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Slider, { Settings } from 'react-slick';
const testimonials = [
    {
        key: 2,
        src: "/images/Frame 19 (1).png",
        bannerSrc: "/images/Rectangle 186.png",
        alt: "https://www.youtube.com/embed/t_crBvUaxaE",
        quote: '"É o melhor investimento a se fazer, afinal, vamos sempre ter que pagar energia"',
        name: "Dr. José Merched Chaar",
        description: "Dr. José Merched Chaar  comenta no vídeo que vai usar a economia dos próximos 25 anos para ter uma qualidade de vida melhor.",
        rangeValue: [2000, 200]
    },
    {
        key: 1,
        src: "/images/Frame-18.png",
        bannerSrc: "/images/Frame-175.png",
        direction: 'shorts',
        alt: "https://www.youtube.com/embed/Q98hd6snnUo",
        quote: '"Eu estou super feliz. Essa é a conta dos meus sonhos!"',
        name: "Gisele Oshiro",
        description: 'Gisele Oshiro comprou suas próprias placas mesmo morando em apartamento. O investimento será pago em poucos anos.',
        rangeValue: [2000, 200]
    },
    {
        key: 4,
        src: "/images/Frame 19.png",
        bannerSrc: "/images/Frame 174.png",
        alt: "https://www.youtube.com/embed/DsUttf79bcA",
        quote: '"Vivemos em um momento em que precisamos cada vez mais cooperar com o meio ambiente"',
        name: "Cláudio Guenka",
        description: "Cláudio Genka  conta que todos os cooperados do parque solar entendem a importância da geração de energia limpa.",
        rangeValue: []
    }
]

export function Testimonials({ showVideoModal, mobile }: any) {

    return (
        <>
            <span id="our-clients"></span>
            <section className="bg-gradient-to-r from-[#A4F4B6] to-[#89EEC4]">
                <div className="container mx-auto md:py-16 py-10 px-4">
                    <div>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4">

                            <h1 className="text-4xl font-bold py-4 md:text-left text-center">Quem investiu recomenda</h1>
                            <span className="flex text-white gap-2 "><FaStar size={24} /><FaStar size={24} /><FaStar size={24} /><FaStar size={24} /><FaStar size={24} /></span>
                        </div>
                        <h4 className="text-2xl md:text-left text-center">Assista aos depoimentos dos nossos clientes e entenda o impacto que a energia solar já causou em suas vidas.</h4>
                    </div>
                    <Slide direction={mobile} />


                </div>
            </section>
        </>
    )

    interface ICard {
        direction?: string
    }
    function Slide({ direction }: ICard) {
        const settings: Settings = {
            arrows: false,
            dotsClass: 'slide-dots',
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div className="container mx-auto text-xl md:px-10 px-6 md:my-16 my-10 gap-4 md:py-10 py-6 bg-white rounded-3xl" key={index}>
                        <div className="flex md:flex-row flex-col md:gap-10 gap-6 h-[500px] rounded-md" onClick={() => { showVideoModal(testimonial.alt, direction) }}>
                            <div className="md:w-2/3 w-full relative rounded-3xl overflow-hidden hidden md:block">
                                <Image alt={testimonial.alt} src={testimonial.bannerSrc} fill className="object-cover !relative"></Image>
                            </div>
                            <div className="md:w-1/3 w-full flex flex-col gap-5">
                                <div className="min-w-60 bg-cover relative overflow-hidden rounded-3xl">
                                    <Image alt={testimonial.alt} src={testimonial.src} fill className="object-cover !relative" ></Image>
                                </div>
                                <div className="min-w-60 bg-cover relative overflow-hidden block md:hidden rounded-3xl">
                                    <Image alt={testimonial.alt} src={testimonial.bannerSrc} fill className="object-cover !relative" ></Image>
                                </div>

                                <p className="font-bold text-xl text-center md:text-left">{testimonial.quote}</p>
                                <p className="font-light text-normal hidden md:block" dangerouslySetInnerHTML={{ __html: testimonial.description }} />
                                {testimonial.rangeValue.length > 1 &&
                                    <p className="md:font-bold py-4 text-xl text-center md:text-left">
                                        Conta caiu de R${testimonial.rangeValue[0]} para menos de R${testimonial.rangeValue[1]}
                                    </p>
                                }

                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }
}
