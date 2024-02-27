export function Growth() {
  return (
    <>
      <span id="our-work"></span>
      <section className="bg-cyan-100">
        <div className="mx-auto container px-4 py-32 relative">
          <div className="bg-white rounded-3xl px-10 py-10 max-w-6xl">
            <h1 className="text-4xl font-bold py-4">Estamos em constante crescimento</h1>
            <h4 className="text-2xl">Conheça um pouco dos nossos números</h4>
            <div className="flex">
              <div className="flex py-10 flex-col gap-8">
                <Card title={"16 Parques Solares"} description={"Usinas Fotovoltaicas Instaladas em Solo na BR-174 e AM-010"} />
                <Card title={"+ 30.000"} description={"Placas Solares instaladas em coberturas de residências e empresas em Manaus"} />
                <Card title={"+ 2000"} description={"Clientes Felizes"} />
              </div>
              <div className="self-end absolute left-1/2 hidden sm:block">
                <img src="images/solar-plates.svg" alt="" className="w-[600px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  interface ICard {
    title: string,
    description: string
  }

  function Card({ title, description }: ICard) {
    return (
      <div>
        <div className=" flex gap-4">
          <div className="border-l-8 border-sky-500 rounded-full"></div>
          <div>
            <h1 className="text-6xl font-bold py-4">{title}</h1>
            <h4 className="text-2xl">{description}</h4></div>
        </div>
      </div>
    )
  }
}