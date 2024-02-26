export function Purpose({ }) {
  return (
    <>
      <section className="container mx-auto flex items-center flex-col py-20 px-4">
        <h1 className="text-4xl font-bold py-4">Cooperar com a vida das pessoas</h1>
        <h4 className="text-2xl">é o nosso propósito</h4>

        <p className="py-6">Todos os projetos da Expertise são executados com as premissas de <b>bem-estar, inovação,
          sustentabilidade e
          tecnologia</b>. <br /> Desde 2017 estamos <b>revolucionando o cenário atual do consumo de
            energia</b>,
          possibilitando o consumo de energia limpa com praticidade e segurança.</p>
        <div className="flex gap-4 py-4">
          <div className="rounded-2xl bg-cover bg-center w-36 h-36 lg:w-72 xl:w-72 lg:h-72" style={{ backgroundImage: "url(images/Foto-5.png)" }}></div>
          <div className="rounded-2xl bg-cover bg-center w-52 h-36 lg:w-[500px] xl:w-[500px] lg:h-72" style={{ backgroundImage: "url(images/foto-6.jpeg)" }}></div>
          <div className="rounded-2xl bg-cover bg-center w-36 h-36 lg:w-72 xl:w-72 lg:h-72" style={{ backgroundImage: "url(images/Foto-3.png)" }}></div>
        </div>
        <div className="flex gap-4">
          <div className="rounded-2xl bg-cover bg-center w-52 h-36 lg:w-[500px] xl:w-[500px] lg:h-72" style={{ backgroundImage: "url(images/Foto-7.jpeg)" }}></div>
          <div className="rounded-2xl bg-cover bg-center w-36 h-36 lg:w-72 xl:w-72 lg:h-72" style={{ backgroundImage: "url(images/Foto-4.png)" }}></div>
          <div className="rounded-2xl bg-cover bg-center w-36 h-36 lg:w-72 xl:w-72 lg:h-72" style={{ backgroundImage: "url(images/Foto-1.png)" }}></div>
        </div>
      </section >
    </>
  )
}
