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
                <Card title={"3"} description={"Parques conclúidos na região norte"} />
                <Card title={"1"} description={"Parque em operação na região sul"} />
                <Card title={"+ 5 mil"} description={"Placas Solares"} />
                <Card title={"+ 500"} description={"Clientes Felizes"} />
              </div>
              <div className="self-end absolute left-1/2 hidden lg:visible xl:visible sm:visible">
                <img src="images/solar-plates.svg" alt="" />
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