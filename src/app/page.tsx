"use client"

import { useEffect, useState } from 'react';
import { Menu } from '@/components/Menu'
import React from 'react';
import { Agendor } from '@/components/Agendor';
import { Modal } from '@/components/Modal';
import { Growth } from '@/components/Growth';
import { Purpose } from '@/components/Purpose';
import { Testimonials } from '@/components/Testimonials';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';

import { Footer } from '@/components/Footer';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W2K4DXBH' });
}, []);

  const [showModal, setShowModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<any>(null);


  function showVideoModal(value: string, direction: string | null | undefined) {
    setActiveTestimonial({ value, direction })
    setShowModal(true)
  }
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="home" id="desktopContent">
        <Menu />
        <Hero />
        <HowItWorks />
        <Agendor mobile={isMobile} />
        <Testimonials showVideoModal={showVideoModal} />
        <Growth />
        {showModal &&
          <Modal activeTestimonial={activeTestimonial} setShowModal={setShowModal}></Modal>
        }

        <Purpose />
        <Footer />
      </div>


    </>

  );
}

export default Home