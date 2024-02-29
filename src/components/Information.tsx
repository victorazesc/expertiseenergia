export function Information({ showVideoModal }: any) {
    const videos = [
      {
        src: 'images/Thumbnail.png',
        alt: 'https://www.youtube.com/embed/Dc8lPfH1FXk',
        description: 'Início das obras - Coopersol 3+'
      },
  
      {
        src: 'images/Thumbnail-3.png',
        alt: 'https://www.youtube.com/embed/NI8_H-IO2dc',
        description: 'Venha conhecer o Parque Solar Expertise'
      },
      {
        src: 'images/Thumbnail-1.png',
        alt: 'https://www.youtube.com/embed/46wQflsx5H4',
        description: 'Energia Solar para apartamentos'
      },
      {
        src: 'images/Thumbnail-4.png',
        alt: 'https://www.youtube.com/embed/08v8r7iRXsU',
        description: 'Obra de drenagem - Parque Solar'
      },
      {
        src: 'images/Thumbnail-2.png',
        alt: 'https://www.youtube.com/embed/mKHLDIa_O5k',
        description: '3 Vantagens da Usina Solar compartilhada'
      }
    ]
    return (
      <>
        <div className="redesign__divisor"></div>
        <section className="redesign__youtube-info">
          <div className="redesign__youtube-content">
            <h5>
              TRANSPARÊNCIA E INFORMAÇÃO
            </h5>
            <p>Fazemos questão de <b>te explicar sobre a nossa tecnologia</b> e todo o nosso trabalho <b>em
              detalhes.</b></p>
            <br />
            <p>Para isso, temos um <a href="https://www.youtube.com/@expertiseenergia" target="_blank">canal no
              YouTube</a> com vídeos informativos e com atualizações dos nossos parques solares, além de
              atualizar
              diariamente o <a href="https://www.instagram.com/expertisesolar/" target="_blank">nosso
                Instagram</a>.
            </p>
          </div>
          <div className="redesign__youtube-cards">
            {videos.map((item) => {
              return (
                <div className="redesign__youtube-item" key={Math.random()}>
                  <img onClick={() => showVideoModal(item.alt, null)} alt={item.alt}
                    className="redesign__testimonials-slider-image" src={item.src} />
                  <span>{item.description}</span>
                </div>
              )
            })}
  
            <a href="https://www.youtube.com/@expertiseenergia" target="_blank"
              className="redesign__youtube-channel--button">
              <img src="images/Logo-Youtube-1-1-1-1.png" alt="" />
              <span id="simulate-form">Veja o canal completo no YouTube</span>
            </a>
          </div>
        </section>
      </>
    )
  }
  