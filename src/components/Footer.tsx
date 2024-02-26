export function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="redesign__footer flex flex-col sm:flex-row justify-between container mx-auto py-12 relative">
                <a href="#desktopContent" className="absolute -top-14 sm:-top-11 right-0"> <img src="images/up.svg" alt="subir" /></a>

                <div className="redesign__footer-social flex-col sm:flex-row">
                    <img src="images/Logo-Expertise-branca-R-2.png" alt="" width={230} />
                    <div className="flex">
                        <a href="https://www.instagram.com/expertisesolar" target="_blank"><img
                            src="images/instagram.png" width={32} height={32} /></a>
                        <a href="https://www.facebook.com/expertisesolar" target="_blank"><img
                            src="images/Frame-150-1.png" width={32} height={32} /></a>
                        <a href="https://www.youtube.com/@expertiseenergia" target="_blank"><img
                            src="images/youtube.png" width={32} height={32} /></a>
                    </div>

                </div>
                <div className="flex flex-col sm:flex-row py-12 sm:py-0">
                    <div className="redesign__footer-location-item flex-col gap-4">
                        <span>Institucional</span>
                        <div className="redesign__footer-location-item-details">
                            Como Funciona
                        </div>
                        <div className="redesign__footer-location-item-details">
                            Vantagens
                        </div>
                        <div className="redesign__footer-location-item-details">
                            Nossos Clientes
                        </div>
                        <div className="redesign__footer-location-item-details">
                            Nosso Trabalho
                        </div>
                        <div className="redesign__footer-location-item-details">
                            Contato
                        </div>
                        <div className="redesign__footer-location-item-details">
                            Fazer uma simulação
                        </div>
                    </div>
                </div>
                <div className="redesign__footer-location  flex-col sm:flex-row">
                    <div className="redesign__footer-location-item flex-col gap-4">
                        <span>Manaus</span>
                        <div className="redesign__footer-location-item-details">
                            <img src="images/Frame-116.png" alt="" />
                            (92) 98600-3968
                        </div>
                        <div className="redesign__footer-location-item-details">
                            <img src="images/Frame-115.png" alt="" />
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