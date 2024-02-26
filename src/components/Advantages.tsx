export function Advantages() {
    const advantages = [
        {
            src: "images/Frame-147.png",
            title: "Instalação remota",
            description: "Suas placas são instaladas em um de nossos parques solares. Você não precisa se preocupar em ter uma área à disposição"
        },
        {
            src: "images/Frame-146.png",
            title: "Portabilidade de endereço",
            description: "Os créditos podem ser utilizados em qualquer unidade consumidora de titularidade do usuário dentro da área de concessão da distribuidora e têm validade de 60 meses"
        },
        {
            src: "images/Frame-145.png",
            title: "Valorização das cotas",
            description: "Seu investimento é impulsionado pelos reajustes anuais da tarifa de energia elétrica"
        }
    ]
    return (
        <>
            <span id="advantages"></span>

            <section className="container mx-auto px-4 flex flex-col py-28">

                <div className="max-w-4xl">
                    <h1 className="text-4xl font-bold py-4">Você economiza sem se preocupar</h1>
                    <h4 className="text-2xl">Com a expertise você economiza sem se preocupar conheça as
                        vantagens de nosso sistema.</h4>
                </div>

                <div className="flex justify-between flex-col-reverse sm:flex-row py-28">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-24">
                        <Card title={"Investimento seguro"} description={"O retorno é certo: você investe o custo de energia dos próximos 5 anos e economiza por 25"} icon={"images/piggy-bank.svg"} />
                        <Card title={"Valorização das cotas"} description={"Seu investimento é impulsionado pelos reajustes anuais da tarifa de energia elétrica"} icon={"images/profits-analytics.svg"} />
                        <Card title={"Foco no que importa"} description={"Economizando na conta de luz você fica tranquilo para curtir o que realmente importa sem limitações"} icon={"images/family.svg"} />
                        <Card title={"Suporte técnico e garantia"} description={" Nossos especialistas estarão sempre à disposição para tirar dúvidas"} icon={"images/hand-shake.svg"} />
                    </div>
                    <div>
                        <img src="images/coins.svg" alt="" width={1500} />
                    </div>
                </div>
                <h1 className="text-4xl font-bold py-4 text-center">Você investe no futuro do planeta</h1>
                <div className="flex justify-between flex-col sm:flex-row py-28">
                    <div>
                        <img src="images/nature.svg" alt="" width={2500} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-24">
                        <Card title={"Segurança e monitoramento"} description={"Somos responsáveis por toda a operação, manutenção e garantia de eficiência das placas do parque"} icon={"images/check.svg"} />
                        <Card title={"Portabilidade de endereço"} description={"Os créditos podem ser utilizados em qualquer unidade consumidora de titularidade do usuário dentro da área de concessão da distribuidora e têm validade de 60 meses"} icon={"images/brief-case.svg"} />
                        <Card title={"Instalação remota"} description={"Suas placas são instaladas em um de nossos parques solares. Você não precisa se preocupar em ter uma área à disposição"} icon={"images/world-engine.svg"} />
                        <Card title={"Impacto ambiental positivo"} description={"Atualmente, o nosso trabalho reduz o consumo de 895 toneladas de CO2 por ano, equivalente à plantação de 40 mil árvores"} icon={"images/tree.svg"} />
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
                <img src={icon} width={35} alt="Cofrinho" />
                <h5 className="font-Oswald font-bold text-lg">{title}</h5>
                <p className="text-lg">
                    {description}
                </p>
            </div>
        )
    }


}