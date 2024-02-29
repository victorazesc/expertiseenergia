export function Hero() {
    return (
        <section className="pt-52 bg-cover font-bold text-white" style={{ backgroundImage: 'url(images/park.jpg)' }}>
            <div className="container mx-auto px-3 flex flex-col">
                <div className="w-full lg:w-1/2 xl:w-1/2 text-center sm:text-left pb-28">
                    <h1 className="drop-shadow-lg text-4xl lg:text-5xl xl:text-5xl leading-[42px] lg:leading-[65px] xl:leading-[65px]">VALORIZE SEU IMÓVEL, RENDIMENTO ANUAL ATÉ 40% <br />RETORNO INVESTIMENTO <br /> EM 30 MESES</h1>
                    <h4 className="drop-shadow-lg text-2xl leading-8 py-4">Ajude o meio ambiente! Faça a transição para a energia renovável através de um investimento inteligente!</h4>
                </div>
            </div>
            <div className="bg-white text-center flex justify-center relative ">
                <a href="#how-it-works" className="absolute -top-[30px] " >
                    <img src="images/down.svg" />
                </a>
            </div>
        </section>
    )
}
