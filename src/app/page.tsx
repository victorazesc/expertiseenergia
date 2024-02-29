"use client"

import { useEffect, useState } from 'react';
import { Menu } from '@/components/Menu'
import React from 'react';
import { Agendor } from '@/components/Agendor';
import { Modal } from '@/components/Modal';
import { Growth } from '@/components/Growth';
import { Purpose } from '@/components/Purpose';
import { Information } from '@/components/Information';
import { Testimonials } from '@/components/Testimonials';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Advantages } from '@/components/Advantages';
import { SocialImpact } from '@/components/SocialImpact';
import { WhoMaters } from '@/components/WhoMaters';
import { Footer } from '@/components/Footer';

function Home() {

  const [showModal, setShowModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<any>(null);


  function showVideoModal(value: string, direction: string | null | undefined) {
    setActiveTestimonial({ value, direction })
    setShowModal(true)
  }
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
      <div className="home" id="desktopContent">
        <Menu />
        <Hero />
        <HowItWorks />
        {/* <Advantages /> */}
        <Growth />
        {/* <SocialImpact /> */}
        {/* <WhoMaters /> */}
        {showModal &&
          <Modal activeTestimonial={activeTestimonial} setShowModal={setShowModal}></Modal>
        }
        <Testimonials showVideoModal={showVideoModal} />

        <Purpose />
        {/* <Information showVideoModal={showVideoModal} /> */}
        <Agendor mobile={isMobile} />
        <Footer />
      </div>


    </>

  );
}

export default Home