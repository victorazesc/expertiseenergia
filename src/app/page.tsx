"use client"

import { useEffect, useState } from 'react';
import { Menu } from '@/components/Menu'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

function Home() {

  const [showModal, setShowModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<any>(null);


  function showVideoModal(value: string, direction: string | null | undefined) {
    setActiveTestimonial({ value, direction })
    setShowModal(true)
  }

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

  const [isMobile, setIsMobile] = useState(false);

  function openCollapsible(index: number) {
    const collapsibleIcons = document.getElementsByClassName("redesign__section-collapsible-icon");
    const collapsibleCols = document.getElementsByClassName("redesign__section-content");
    if (collapsibleCols.length > 0) {
      const icon = collapsibleIcons[index - 1] as HTMLElement
      const content = collapsibleCols[index - 1] as HTMLElement
      if (content.style.display === "block") {
        content.style.display = "none";
        icon.style.transform = ""
      } else {
        content.style.display = "block";
        icon.style.transform = "rotate(180deg)"
      }
    }
  }

  async function changeSlideMobile(n: number) {
    let i;
    let slides = await document.getElementsByClassName("slide-mobile-green");
    let options = await document.getElementsByClassName("redesign__green-presentation--option");

    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
    }
    for (i = 0; i < options.length; i++) {
      options[i].className = options[i].className.replace(" active", "");
    }
    slides[n - 1].className += " active";
    options[n - 1].className += " active";
  }


  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    // Executa a função ao carregar a página
    handleResize();

    // Ouve o evento de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Remove o listener de evento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {!isMobile ?
        <div className="home" id="desktopContent">
          <Menu />
          {/* H E R O*/}
          <main className="redesign-hero">
            <div className="redesign-hero__content">
              <h1>VALORIZE SEU IMÓVEL <br /> RENDIMENTO ANUAL $ ATÉ 40% <br /> RETORNO INVESTIMENTO $ EM 30 MESES</h1>
              <h4>Ajude o meio ambiente! Faça a transição para uma matriz energética renovável através de um investimento inteligente!</h4>
              <a href="#how-it-works">
                <img src="images/Frame.png" />
              </a>
            </div>
            <div>
              <img src="images/carro-autonomo.JPG" />
            </div>
          </main>
          <span id="how-it-works"></span>
          {/* H O W    I T   W O R K S  */}
          <section className="redesign__section-title">
            <h5>Porque Energia Solar?</h5>
            <h4>INVESTIMENTO INTELIGENTE QUE AJUDA O PLANETA</h4>
          </section>
          <section className="redesign__green-presentation">
            <div className="redesign__green-presentation-item">
              <img src="images/piggy-bank.svg" width={100} />
              <p className="redesign__green-presentation-item--paragraph">
                Desde 2012, a energia solar já gerou no Brasil mais de R$ 170 bilhões em investimentos. Um projeto bem dimensionado e corretamente instalado pode gerar um rendimento anual de até 40%, superando qualquer aplicação financeira atualmente disponível no mercado.
              </p>
            </div>
            <div className="redesign__green-presentation-item">
              <img src="images/profits-analytics.svg" />
              <p className="redesign__green-presentation-item--paragraph">
                Valorize sua propriedade! Milhões de pessoas já instalaram painéis solares nos seus telhados. Junte-se a esse movimento!
                Estudos apontam que um sistema de energia solar aumenta em 5,1% 0 valor de venda de um imóvel.
              </p>
            </div>
            <div className="redesign__green-presentation-item">
              <img src="images/global-globe.svg" />
              <p className="redesign__green-presentation-item--paragraph">
                Valorize sua propriedade! Milhões de pessoas já instalaram painéis solares nos seus telhados. Junte-se a esse movimento!
                Estudos apontam que um sistema de energia solar aumenta em 5,1% 0 valor de venda de um imóvel.
              </p>
            </div>
          </section>
          <span id="advantages"></span>
          <section className="redesign__section-title">
            <h5>VANTAGENS DO NOSSO SISTEMA</h5>
            <h4>VOCÊ ECONOMIZA SEM SE PREOCUPAR</h4>
          </section>
          <section className="redesign__green-advantages">
            <div className="redesign__green-advantages-content">

              {advantages.map((item) => {
                return (
                  <div className="redesign__green-advantages-item" key={Math.random()}>
                    <img src={item.src} />
                    <h5>
                      {item.title}
                    </h5>
                    <p>
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="redesign__green-advantages-subcontent">
              <img src="images/Frame-1.png" />
              <h5>Segurança e monitoramento</h5>
              <p>Somos responsáveis por toda a operação, manutenção e garantia de eficiência das placas do parque</p>
            </div>
          </section>
          <section className="redesign__social-impact">
            <span className="redesign__social-impact--heading">VOCÊ INVESTE NO FUTURO E NO PLANETA</span>
            <div className="redesign__social-impact-row">
              <div className="redesign__social-impact-item">
                <img src="images/moneybag.png" />
                <h6>Investimento seguro</h6>
                <p>O retorno é certo: você investe o custo de energia dos próximos 5 anos e <b>economiza por 25</b>
                </p>
              </div>
              <div className="redesign__social-impact-item">
                <img src="images/handshake.png" />
                <h6>Suporte técnico e garantia</h6>
                <p>Nossos especialistas estarão sempre à disposição para tirar dúvidas</p>
              </div>
              <div className="redesign__social-impact-item redesign__social-impact-item--green">
                <img src="images/tree.png" />
                <h6>Impacto ambiental positivo</h6>
                <p>Atualmente, o nosso trabalho <b>reduz o consumo de 895 toneladas de CO2 por ano</b>, equivalente
                  à
                  <b>plantação de 40 mil árvores</b>
                </p>
              </div>
            </div>
          </section>
          <section className="redesign__what-matters">
            <div className="redesign__what-matters-content">
              <img src="images/head.png" />
              <h6>Foco no que importa</h6>
              <p>
                Economizando na conta de luz você fica tranquilo para curtir o que realmente importa <b>sem
                  limitações</b>
              </p>
            </div>
          </section>


          {/* <!-- M O D A L --> */}
          {showModal &&
            <Modal activeTestimonial={activeTestimonial} setShowModal={setShowModal}></Modal>
          }
          <Testimonials showVideoModal={showVideoModal} />
          <Growth />
          <Purpose />
          <Information showVideoModal={showVideoModal} />
          <Agendor mobile={isMobile} />
          <footer className="redesign__footer">
            <div className="redesign__footer-social">
              <img src="images/Logo-Expertise-branca-R-2.png" alt="" />
              <a href="https://www.instagram.com/expertisesolar" target="_blank"><img
                src="images/instagram.png" /></a>
              <a href="https://www.facebook.com/expertisesolar" target="_blank"><img
                src="images/Frame-150-1.png" /></a>
              <a href="https://www.youtube.com/@expertiseenergia" target="_blank"><img
                src="images/youtube.png" /></a>
            </div>
            <div className="redesign__footer-location">
              <div className="redesign__footer-location-item">
                <span>MANAUS</span>
                <div className="redesign__footer-location-item-details">
                  <img src="images/Frame-116.png" alt="" />
                  (92) 98600-3968
                </div>
                <div className="redesign__footer-location-item-details">
                  <img src="images/Frame-115.png" alt="" />
                  Rua Rio Iça, 310, sala 3, Edifício Celebration Smart Offices - Nossa Senhora das Graças
                </div>
              </div>
              <div className="redesign__footer-location-item">
                <span>florianópolis</span>
                <div className="redesign__footer-location-item-details">
                  <img src="images/Frame-116.png" alt="" />
                  (48) 98838-9328
                </div>
                <div className="redesign__footer-location-item-details">
                  <img src="images/Frame-115.png" alt="" />
                  Rua Ângelo La Porta, 53, sala 602, Edifício Estação Milano - Centro
                </div>
              </div>
            </div>
          </footer>
        </div>
        :
        <div id="mobileContent">
          {/* <!--  H E R O  --> */}
          <main className="redesign-hero">
            <img src="images/Foto-Coopersol-2-1-1.png" />
            <div className="redesign-hero__content">
              <h1>CONTA DE LUZ BAIXA <br /> + ENERGIA LIMPA?</h1>
              <h4>Conheça o parque solar da Expertise e <b> comece a economizar de qualquer endereço</b></h4>
              <a href="#simulate-mobile">
                <button className="redesign-hero__button">
                  fazer simulação
                </button>
              </a>
              <a href="#how-it-works-mobile">
                <img src="images/Frame.png" />
              </a>
            </div>
          </main>
          <span id="how-it-works-mobile"></span>
          {/* <!--  H O W    I T   W O R K S --> */}
          <section className="redesign__section-title">
            <h5>Como funciona</h5>
            <h4>A ECONOMIA VAI DO PARQUE SOLAR ATÉ A SUA CASA</h4>
          </section>
          <section className="redesign__green-presentation">
            <div className="redesign__green-presentation-item slide-mobile-green active">
              <p className="redesign__green-presentation-item--paragraph">
                <b>A energia é produzida nas suas placas,</b> instaladas em um de nossos parques solares
              </p>
              <img src="images/1-1.png" />
            </div>
            <div className="redesign__green-presentation-item slide-mobile-green">
              <p className="redesign__green-presentation-item--paragraph">
                A energia produzida é <b>injetada na rede da distribuidora</b> de energia local
              </p>
              <img src="images/2.png" />
            </div>
            <div className="redesign__green-presentation-item slide-mobile-green">
              <p className="redesign__green-presentation-item--paragraph">
                Por fim, é <b>convertida em créditos</b> aos usuários do parque que são abatidos do consumo
              </p>
              <img src="images/3.png" />
            </div>
          </section>
          <div className="redesign__green-presentation-options">
            <div onClick={() => changeSlideMobile(1)} className="redesign__green-presentation--option active">1</div>
            <div onClick={() => changeSlideMobile(2)} className="redesign__green-presentation--option">2</div>
            <div onClick={() => changeSlideMobile(3)} className="redesign__green-presentation--option">3</div>
          </div>
          <div className="redesign__divisor"></div>
          <section className="redesign__section-title">
            <h5>VANTAGENS DO NOSSO SISTEMA</h5>
            <h4>VOCÊ ECONOMIZA SEM SE PREOCUPAR</h4>
          </section>
          <div className="redesign__section-expandable">
            <div onClick={() => openCollapsible(1)} className="redesign__section-collapsible">
              <div className="redesign__section-collapsible-content">
                <img src="images/Frame-147.png" alt="" />
                Instalação remota
              </div>
              <img className="redesign__section-collapsible-icon" src="images/Icone-1.png" alt="" />
            </div>
            <div className="redesign__section-content">
              Suas placas são instaladas em um de nossos parques solares. Você não precisa se preocupar em ter uma
              área à
              disposição
            </div>
            <div onClick={() => openCollapsible(2)} className="redesign__section-collapsible">
              <div className="redesign__section-collapsible-content">
                <img src="images/Frame-146.png" alt="" />
                Portabilidade de endereço
              </div>
              <img className="redesign__section-collapsible-icon" src="images/Icone-1.png" alt="" />
            </div>
            <div className="redesign__section-content">
              Os créditos podem ser utilizados em qualquer unidade consumidora de titularidade do usuário dentro da
              área
              de concessão da distribuidora e têm validade de 60 meses
            </div>
            <div onClick={() => openCollapsible(3)} className="redesign__section-collapsible">
              <div className="redesign__section-collapsible-content">
                <img src="images/Frame-145.png" alt="" />
                Valorização das cotas
              </div>
              <img className="redesign__section-collapsible-icon" src="images/Icone-1.png" alt="" />
            </div>
            <div className="redesign__section-content">
              Seu investimento é impulsionado pelos reajustes anuais da tarifa de energia elétrica
            </div>
          </div>
          <section className="redesign__safety">
            <img src="images/Frame-1.png" alt="" />
            <h5>Segurança e monitoramento</h5>
            <h6>Somos responsáveis por toda a operação, manutenção e garantia de eficiência das placas do parque</h6>
          </section>
          <div className="redesign__divisor"></div>
          <div className="redesign__green-invest">
            VOCÊ INVESTE NO FUTURO E NO PLANETA
          </div>
          <div className="redesign__section-expandable">
            <div onClick={() => openCollapsible(4)} className="redesign__section-collapsible">
              <div className="redesign__section-collapsible-content">
                <img src="images/moneybag.png" alt="" />
                Investimento seguro
              </div>
              <img className="redesign__section-collapsible-icon" src="images/Icone-1.png" alt="" />
            </div>
            <div className="redesign__section-content">
              O retorno é certo: você investe o custo de energia dos próximos 5 anos e economiza por 25
            </div>
            <div onClick={() => openCollapsible(5)} className="redesign__section-collapsible">
              <div className="redesign__section-collapsible-content">
                <img src="images/handshake.png" alt="" />
                Suporte técnico e garantia
              </div>
              <img className="redesign__section-collapsible-icon" src="images/Icone-1.png" alt="" />
            </div>
            <div className="redesign__section-content">
              Nossos especialistas estarão sempre à disposição para tirar dúvidas
            </div>
            <div onClick={() => openCollapsible(6)} className="redesign__section-collapsible">
              <div className="redesign__section-collapsible-content">
                <img src="images/Icone-3.png" alt="" />
                Impacto ambiental positivo
              </div>
              <img className="redesign__section-collapsible-icon" src="images/Icone-1.png" alt="" />
            </div>
            <div className="redesign__section-content">
              Atualmente, o nosso trabalho reduz o consumo de 895 toneladas de CO2 por ano, equivalente à plantação de
              40
              mil árvores
            </div>
          </div>
          <div className="redesign__what-matters-green">
            <div className="redesign__what-matters-green--content">
              <img src="images/Icone-4.png" alt="" />
              <h5>Foco no que importa</h5>
              <h6>Economizando na conta de luz você fica tranquilo para curtir o que realmente importa sem limitações
              </h6>
            </div>
            <span className="redesign__what-matters-green--image"></span>
          </div>

          {showModal &&
            <Modal activeTestimonial={activeTestimonial} setShowModal={setShowModal} mobile></Modal>
          }
          <Testimonials showVideoModal={showVideoModal} mobile />
          <Growth />
          <Purpose />
          <Information showVideoModal={showVideoModal}></Information>
          <Agendor mobile />
          <footer className="redesign__footer">
            <img src="images/Logo-Expertise-branca-R-2.png" alt="" />
            <div className="redesign__footer-social">
              <a href="https://www.instagram.com/expertisesolar" target="_blank"><img
                src="images/instagram.png" /></a>
              <a href="https://www.facebook.com/expertisesolar" target="_blank"><img
                src="images/Frame-150-1.png" /></a>
              <a href="https://www.youtube.com/@expertiseenergia" target="_blank"><img src="images/youtube.png" /></a>
            </div>
            <div className="redesign__footer-location">
              <div className="redesign__footer-location-item">
                <span>MANAUS</span>
                <div>
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
              <div className="redesign__footer-location-item">
                <span>florianópolis</span>
                <div>
                  <div className="redesign__footer-location-item-details">
                    <img src="images/Frame-116.png" alt="" />
                    (48) 98838-9328
                  </div>
                  <div className="redesign__footer-location-item-details">
                    <img src="images/Frame-115.png" alt="" />
                    Rua Ângelo La Porta, 53, sala 602, Edifício Estação Milano - Centro
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      }
    </>

  );
}

function Agendor({ mobile }: any) {
  const [sendedEmail, setSendedEmail] = useState<boolean>(false);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Nome muito curto!')
      .max(50, 'Nome muito longo!')
      .required('O nome é obrigatório'),
    phone: Yup.string()
      .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone inválido')
      .required('O telefone é obrigatório'),
    email: Yup.string().email('Email invalido!').required('O email é obrigatório'),
  });


  const handleSubmit = async (e: any) => {
    try {
      setLoadingButton(true)
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(e)
      });

      if (response.ok) {
        setSendedEmail(true)
        setTimeout(() => { setSendedEmail(false), setLoadingButton(false) }, 5000)
      } else {
        console.error('Erro ao enviar e-mail:', response.statusText);
      }
    } catch (error) {
      setLoadingButton(false)
      console.error('Erro ao enviar e-mail:', error);
    }
  };
  return (
    <>
      {/* <!-- Agendor --> */}
      <section id="simulate-mobile">
        {/* <!-- Adicione o formulário ao seu conteúdo ou onde desejar exibir --> */}
        <div style={{ margin: !mobile ? '32px 96px' : '' }}>
          {mobile && <div style={{
            minHeight: '300px',
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            fontFamily: "'Droid Sans', sans-serif",
            color: 'white',
            background: '#0dc937',
            padding: 30
          }}>
            <p style={{ fontSize: "20px", lineHeight: "1.25" }}>Faça sua simulação</p>
            <p style={{ lineHeight: 1.25 }}><br /></p>
            <p style={{ lineHeight: 1.25 }}>Descubra quanto seria seu investimento
              gatuitamente.
            </p>
            <p style={{ lineHeight: 1.25 }}><br /></p>
            <p style={{ lineHeight: 1.25 }}>Preencha seus dados e um de nossos
              especialistas
              entrará em contato.</p>
            <p style={{ lineHeight: 1.25 }}><br /></p>
          </div>
          }


          <div style={{
            display: 'flex',
            minWidth: '100%',
            borderColor: '#ffffff',
            borderRadius: '1px',
            borderWidth: '10px',
            borderTopStyle: 'solid',
            borderBottomStyle: 'solid',
            borderLeftStyle: 'solid',
            borderRightStyle: 'solid',
          }}>


            {!mobile && <div style={{
              background: '#0dc937',
              flex: '7 0 0',
              display: 'flex',
              alignItems: 'center',
              padding: '32px'
            }}>
              <div style={{
                minHeight: '300px',
                display: 'flex',
                alignContent: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                fontFamily: "'Droid Sans', sans-serif",
                color: 'white'
              }}>
                <p style={{ fontSize: "20px", lineHeight: "1.25" }}>Faça sua simulação</p>
                <p style={{ lineHeight: 1.25 }}><br /></p>
                <p style={{ lineHeight: 1.25 }}>Descubra quanto seria seu investimento
                  gatuitamente.
                </p>
                <p style={{ lineHeight: 1.25 }}><br /></p>
                <p style={{ lineHeight: 1.25 }}>Preencha seus dados e um de nossos
                  especialistas
                  entrará em contato.</p>
                <p style={{ lineHeight: 1.25 }}><br /></p>
              </div>
            </div>}

            <div style={{ background: "white", flex: "5 0 0", padding: "32px" }}>
              {sendedEmail ?
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="images/check-mark.png" alt="" width={130} />
                  <h1 className='text-2xl'>
                    Sua solicitação de contato foi enviada!
                  </h1>
                  <h2 className='text-xl'>Enviamos um email para você</h2>
                </div>
                :
                <Formik
                  validationSchema={contactFormSchema}
                  initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                  }}
                  onSubmit={async (values) => {
                    handleSubmit(values)
                  }}
                >
                  {({ errors, touched, isValidating }) => (
                    <Form style={{ display: "flex", flexDirection: "column" }}>
                      <Field id="name" name="name" placeholder="Nome*" />
                      {errors.name && touched.name && <div className='text-red-400 text-sm -mt-5'>{errors.name}</div>}
                      <Field
                        name="phone"
                        render={({ field }: any) => (
                          <InputMask
                            {...field}
                            mask="(99) 99999-9999"
                            maskChar=""
                            placeholder="(XX) XXXXX-XXXX"
                            type="text"
                          />
                        )}
                      />
                      {errors.phone && touched.phone && <div className='text-red-400 text-sm -mt-5'>{errors.phone}</div>}
                      <Field
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="mb-7"
                      />
                      {errors.email && touched.email && <div className='text-red-400 text-sm -mt-5'>{errors.email}</div>}
                      <br />
                      {
                        loadingButton ? <button disabled={true} className="agendor-button" id="submit-agendor-form" type="submit"
                        ><img src="images/loading.svg" width={35} alt="" /></button> : <button className="agendor-button mt-5" id="submit-agendor-form" type="submit"
                        >enviar</button>
                      }

                    </Form>
                  )}
                </Formik>
              }


            </div>
          </div>
        </div>
      </section >
    </>
  )
}

function Growth() {
  return (
    <>
      <span id="our-work"></span>
      <section className="redesign__section-title">
        <h5>Conheça o nosso trabalho</h5>
        <h4>ESTAMOS EM CONSTANTE CRESCIMENTO</h4>
      </section>
      <section className="redesign__our-work">
        <div className="redesign__our-work-row">
          <div className="redesign__our-work-item">
            <img src="images/Frame.png" alt="" />
            <div className="redesign__our-work-item-content">
              <span className="redesign__our-work-item-number">3</span>
              <span className="redesign__our-work-item-text">PARQUES CONCLUÍDOS NA REGIÃO NORTE</span>
            </div>
          </div>
          <div className="redesign__our-work-item">
            <img src="images/Frame-1.png" alt="" />
            <div className="redesign__our-work-item-content">
              <span className="redesign__our-work-item-number">1</span>
              <span className="redesign__our-work-item-text">PARQUE EM OPERAÇÃO NA REGIÃO SUL</span>
            </div>
          </div>
          <div className="redesign__our-work-item">
            <img src="images/Frame-2.png" alt="" />
            <div className="redesign__our-work-item-content">
              <span className="redesign__our-work-item-number">+5 MIL</span>
              <span className="redesign__our-work-item-text">PLACAS SOLARES</span>
            </div>
          </div>
          <div className="redesign__our-work-item">
            <img src="images/Frame-3.png" alt="" />
            <div className="redesign__our-work-item-content">
              <span className="redesign__our-work-item-number">+500</span>
              <span className="redesign__our-work-item-text">CLIENTES FELIZES</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Purpose({ }) {
  return (
    <>
      <div className="redesign__divisor"></div>
      <section className="redesign__gallery">
        <h4>COOPERAR COM A VIDA DAS PESSOAS</h4>
        <h6>é o nosso propósito</h6>
        <p>Todos os projetos da Expertise são executados com as premissas de <b>bem-estar, inovação,
          sustentabilidade e
          tecnologia</b>. <br /> Desde 2017 estamos <b>revolucionando o cenário atual do consumo de
            energia</b>,
          possibilitando o consumo de energia limpa com praticidade e segurança.</p>
        <div className="redesign__gallery-row">
          <img src="images/Foto-1.png" alt="" />
          <img src="images/Foto-2.png" alt="" />
          <img src="images/Foto-3.png" alt="" />
          <img src="images/Foto-4.png" alt="" />
          <img src="images/Foto-5.png" alt="" />
        </div>
      </section>
    </>
  )
}

function Modal({ activeTestimonial, setShowModal, mobile }: any) {

  return (

    <>
      {!mobile ?
        <section id="testimonial-player-container-mobile" className="redesign__testimonial-video">
          <div className="redesign__testimonial-video--content">
            <span className="redesign__testimonial-video--button" onClick={() => setShowModal(false)}>
              Fechar
              <img src="images/times.png" alt="" />
            </span>
            {activeTestimonial.direction === 'shorts' ?

              <iframe id="testimonial-player-shorts"
                className="redesign__testimonial-video--video redesign__testimonial-video--video-shorts" src={activeTestimonial.value}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen width="320" height="560">
              </iframe>
              :
              <iframe id="testimonial-player-landscape"
                className="redesign__testimonial-video--video redesign__testimonial-video--video-landscape" src={activeTestimonial.value}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={{ minWidth: "Ï716px" }} width="716" height="403" allowFullScreen>
              </iframe>
            }
          </div>
        </section>

        :

        <section id="testimonial-player-container-mobile" className="redesign__testimonial-video">
          <div className="redesign__testimonial-video--content">
            <span className="redesign__testimonial-video--button" onClick={() => setShowModal(false)}>
              Fechar
              <img src="images/times.png" alt="" />
            </span>
            {activeTestimonial.direction === 'shorts' ?
              <iframe id="testimonial-player-shorts-mobile"
                className="redesign__testimonial-video--video redesign__testimonial-video--video-shorts" src={activeTestimonial.value}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen width="300" height="525">
              </iframe>
              :
              <iframe id="testimonial-player-landscape-mobile"
                className="redesign__testimonial-video--video redesign__testimonial-video--video-landscape" src={activeTestimonial.value}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                width="300" height="169.3" allowFullScreen>
              </iframe>
            }
          </div>
        </section>
      }
    </>
  )
}

function Information({ showVideoModal }: any) {
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

function Testimonials({ showVideoModal, mobile }: any) {
  const slideToShow = mobile ? 1 : 2

  const [slideShowFirstIndex, setSlideShowFirstIndex] = useState(0);
  const [dot, setDot] = useState(1);
  const [slideShowSecondIndex, setSlideShowSecondIndex] = useState(slideToShow);


  function handleSlide(action: string) {
    if (action === "previous") {
      setDot(dot - 1)
      setSlideShowFirstIndex(slideShowFirstIndex - slideToShow)
      setSlideShowSecondIndex(slideShowSecondIndex - slideToShow)
    } else {
      setDot(dot + 1)
      setSlideShowFirstIndex(slideShowFirstIndex + slideToShow)
      setSlideShowSecondIndex(slideShowSecondIndex + slideToShow)
    }
  }


  const testimonials = [
    {
      key: 1,
      src: "images/gisele-oshiro-1-1.jpg",
      direction: 'shorts',
      alt: "https://www.youtube.com/embed/Q98hd6snnUo",
      quote: "Eu estou super feliz. Essa é a conta dos meus sonhos!",
      name: "Gisele Oshiro",
      description: "A cliente conta no vídeo que comprou suas próprias placas <b>mesmo morando em apartamento</b>. O investimento que ela fez vai ser pago em poucos anos e ela vai poder continuar usufruindo das contas baixas por muito mais tempo!",
      rangeValue: [2000, 200]
    },
    {
      key: 2,
      src: "images/jose-chaar-1-1.jpg",
      alt: "https://www.youtube.com/embed/t_crBvUaxaE",
      quote: "É o melhor investimento a se fazer, afinal, vamos sempre ter que pagar energia",
      name: "Dr. José Merched Chaar",
      description: "José comenta no vídeo que vai usar a economia dos próximos 25 anos para ter uma <b>qualidade de vida melhor</b>.",
      rangeValue: [1500, 200]
    },
    {
      key: 3,
      src: "images/carlos-oshiro-1-1.jpg",
      alt: "https://www.youtube.com/embed/n1fTA2rIg6c",
      quote: "Tendo sobra de energia nas minhas placas, consigo transferir para onde quiser",
      name: "Carlos Oshiro",
      description: "Carlos explica no vídeo que só usa a energia do parque da Expertise para o seu apartamento e, por isso, às vezes <b>sobra energia na sua reserva</b>. Comenta que a conta não fica zerada por causa dos impostos e que poderá transferir a reserva para outro lugar, já que é patrimônio seu.",
      rangeValue: [1800, 194]
    },
    {
      key: 4,
      src: "images/claudio-guenka-1-1.jpg",
      alt: "https://www.youtube.com/embed/DsUttf79bcA",
      quote: "Vivemos em um momento em que precisamos cada vez mais cooperar com o meio ambiente",
      name: "Cláudio Guenka",
      description: "Cláudio deixa claro no seu depoimento o senso de cooperação - todos os cooperados do parque solar entendem a importância da geração de energia limpa e usufruem do modelo ofertado pela Expertise para benefício de todos.",
      rangeValue: []
    }
  ]
  const slideDot = testimonials.length / slideToShow
  return (
    <>
      <span id="our-clients"></span>
      {/* <!-- O U R   C L I E N T S --> */}
      <section className="redesign__testimonials-slider">
        <div className="redesign__testimonials-slider--header">
          <span>NOSSOS CLIENTES</span>
          <h4>ASSISTA AO DEPOIMENTO DE QUEM INVESTIU</h4>
        </div>
        <div className="redesign__testimonials-slider-container">
          {slideShowFirstIndex != 0 && !mobile && <img onClick={() => handleSlide("previous")}
            className="redesign__testimonials-slider-item--nav prev-desktop"
            src="images/Frame-149.png" />}
          <div className="fade redesign__testimonials-slider-row slides-desktop active">

            {testimonials.slice(slideShowFirstIndex, slideShowSecondIndex).map((item) => {
              return (
                <div className="redesign__testimonials-slider-item" key={Math.random()}>
                  <img onClick={() => showVideoModal(item.alt, item.direction)} className="redesign__testimonials-slider-image"
                    src={item.src} alt={item.alt} />
                  <div className="redesign__testimonials-slider-item--content">
                    <span className="redesign__testimonials-slider-item--commentary">
                      "{item.quote}"
                    </span>
                    <span className="redesign__testimonials-slider-item--name">
                      {item.name}
                    </span>
                    <p className="redesign__testimonials-slider-item--description" dangerouslySetInnerHTML={{ __html: item.description }} />
                    {item.rangeValue.length > 1 &&
                      <p className="redesign__testimonials-slider-item--values">
                        As contas foram de
                        <br />
                        <b>R${item.rangeValue[0]}</b> para <b>R${item.rangeValue[1]}</b>
                      </p>
                    }

                  </div>
                </div>
              )
            })}
          </div>
          {slideShowSecondIndex != testimonials.length && !mobile && <img onClick={() => handleSlide("next")}
            className="redesign__testimonials-slider-item--nav  next-desktop"
            src="images/Frame-148.png" />}
        </div>
        {mobile ?
          <section className="redesign__testimonials-slider--controls">
            <img onClick={() => handleSlide("previous")}
              style={{ visibility: slideShowFirstIndex != 0 ? 'visible' : 'hidden' }}
              className="redesign__testimonials-slider-item--nav redesign__testimonials-slider-item--prev prev-mobile"
              src="images/Frame-149.png" />
            <div className="dot-group">
              <span className={`dot dot-mobile ${dot === 1 && 'active'}`} onClick={(event: any) => { setDot(1), setSlideShowFirstIndex(0), setSlideShowSecondIndex(1) }}></span>
              <span className={`dot dot-mobile ${dot === 2 && 'active'}`} onClick={(event: any) => { setDot(2), setSlideShowFirstIndex(1), setSlideShowSecondIndex(2) }}></span>
              <span className={`dot dot-mobile ${dot === 3 && 'active'}`} onClick={(event: any) => { setDot(3), setSlideShowFirstIndex(2), setSlideShowSecondIndex(3) }}></span>
              <span className={`dot dot-mobile ${dot === 4 && 'active'}`} onClick={(event: any) => { setDot(4), setSlideShowFirstIndex(3), setSlideShowSecondIndex(4) }}></span>
            </div>
            <img onClick={() => handleSlide("next")}
              style={{ visibility: slideShowSecondIndex != testimonials.length ? 'visible' : 'hidden' }}
              className="redesign__testimonials-slider-item--nav redesign__testimonials-slider-item--next next-mobile"
              src="images/Frame-148.png" />
          </section>
          :

          <div className="dot-group">
            {Array.from({ length: slideDot }, (_, index) => (
              <span key={Math.random()} className={`dot dot-desktop ${slideShowFirstIndex === 0 && index === 0 ? 'active' : slideShowSecondIndex === testimonials.length && index === 1 ? 'active' : ''}`} onClick={() =>
                slideShowFirstIndex === 0 && index === 0 ? () => { } :
                  slideShowFirstIndex != 0 && index === 0 ? handleSlide("previous") :
                    slideShowSecondIndex != testimonials.length && index === 1 ? handleSlide("next") : () => { }}></span>

            ))}
          </div>
        }




      </section>
    </>
  )
}

export default Home