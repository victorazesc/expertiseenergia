import Image from "next/image"
export function Modal({ activeTestimonial, setShowModal, mobile }: any) {

    return (

        <>
            {!mobile ?
                <section id="testimonial-player-container-mobile" className="redesign__testimonial-video">
                    <div className="redesign__testimonial-video--content">
                        <span className="redesign__testimonial-video--button" onClick={() => setShowModal(false)}>
                            Fechar
                            <Image src="/images/times.png" width={10} height={10} alt="sair" />
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
                                className="redesign__testimonial-video--video redesign__testimonial-video--video-landscape w-full md:w-[700px]"  src={activeTestimonial.value}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                height="403" allowFullScreen>
                            </iframe>
                        }
                    </div>
                </section>

                :

                <section id="testimonial-player-container-mobile" className="redesign__testimonial-video">
                    <div className="redesign__testimonial-video--content">
                        <span className="redesign__testimonial-video--button" onClick={() => setShowModal(false)}>
                            Fechar
                            <Image src="images/times.png" alt="sair" />
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