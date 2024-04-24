import Image from "next/image"

export function Purpose({ }) {
  const images = [
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-1.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-2.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-3.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-4.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-5.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-6.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-7.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-8.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-9.jpeg"
    },
    {
      alt: "placas solares em telhado",
      src: "/images/Foto-10.jpeg"
    },
  ]
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
        <div className="container mx-auto grid grid-cols-5 sm:grid-cols-5 text-xl px-4 gap-4">
          {images.map((item) => {
            return (
              <div key={item.alt} className="rounded-2xl bg-cover bg-center overflow-hidden relative w-24 h-24 lg:w-72 xl:w-72 lg:h-72">
                <Image src={item.src} alt={item.alt} fill={true} className="object-cover"></Image>
              </div>
            )
          })}
        </div>
      </section >
    </>
  )
}
