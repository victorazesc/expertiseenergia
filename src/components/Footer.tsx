import Image from "next/image"

export function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="redesign__footer flex flex-col sm:flex-row justify-between container mx-auto py-12 relative">
                <a href="#desktopContent" className="absolute -top-14 sm:-top-11 right-0"> <Image src="/images/up.svg" width={104} height={56} alt="subir" /></a>

                <div className="redesign__footer-social flex-col sm:flex-row">
                    <Image src="/images/Logo-Expertise-branca-R-2.png" width={230} height={51} alt="expertise" />
                    <div className="flex">
                        <a href="https://www.instagram.com/expertisesolar" target="_blank">
                            <Image src="/images/instagram.png" width={32} height={32} alt={"instagram"} /></a>
                        <a href="https://www.facebook.com/expertisesolar" target="_blank">
                            <Image src="/images/Frame-150-1.png" width={32} height={32} alt="facebook" /></a>
                        <a href="https://www.youtube.com/@expertiseenergia" target="_blank">
                            <Image src="/images/youtube.png" width={32} height={32} alt="youtube" /></a>
                    </div>

                </div>
                <div className="flex flex-col sm:flex-row py-12 sm:py-0">
                    <div className="redesign__footer-location-item flex-col gap-4">
                        <span>Institucional</span>

                        <a href="#how-it-works" className="cursor-pointer block" style={{ padding: 0 }}>
                            <div className="redesign__footer-location-item-details">
                                Como Funciona
                            </div>
                        </a>

                        <a href="#our-clients" className="cursor-pointer block" style={{ padding: 0 }}>
                            <div className="redesign__footer-location-item-details">
                                Nossos Clientes
                            </div>
                        </a>

                        <a href="##our-work" className="cursor-pointer block" style={{ padding: 0 }}>
                            <div className="redesign__footer-location-item-details">
                                Nosso Trabalho
                            </div>
                        </a>
                        <a href="#simulate-form" className="cursor-pointer block" style={{ padding: 0 }}>
                            <div className="redesign__footer-location-item-details">
                                Contato
                            </div>
                        </a>
                        <a href="#simulate-form" className="cursor-pointer block" style={{ padding: 0 }}>
                            <div className="redesign__footer-location-item-details">
                                Fazer uma simulação
                            </div>
                        </a>
                    </div>
                </div>
                <div className="redesign__footer-location  flex-col sm:flex-row">
                    <div className="redesign__footer-location-item flex-col gap-4">
                        <span>Manaus</span>
                        <div className="flex items-center">
                            <Image src="/images/Frame-116.png" className="h-4" width={16} height={17} alt="whatsapp" />
                            <a href="https://wa.me/5592984512299">(92) 98451-2299</a>
                        </div>
                        <div className="redesign__footer-location-item-details">
                            <Image src="/images/Frame-115.png" width={16} height={51} alt="endereço" />
                            Rua Rio Iça, 310, sala 3, Edifício Celebration Smart Offices - Nossa Senhora das Graças
                        </div>
                    </div>
                </div>


            </footer>
            <div className="bg-slate-100 py-8">
                <div className="container mx-auto px-4 flex flex-col gap-8 sm:flex-row justify-between">
                    <p>{year}. Expertise - Todos os direitos reservados </p>
                    <p className="text-slate-400">Designed by <a href="https://www.azevedo.click/">Victor Azevedo</a></p>
                </div>

            </div>
        </>
    )
}