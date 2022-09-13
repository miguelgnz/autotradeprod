import React, {useEffect} from 'react'
import instagram from '../../assets/logos/instagram.svg'
import facebook from '../../assets/logos/facebook.svg'
import whatsapp from '../../assets/logos/whatsapp.svg'
import tiktok from '../../assets/logos/tiktok.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'

export const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000})
    }, [])

    return (
        <div className="py-5" id="social">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nuestras redes sociales</h2>
                </div>
                <div className="row align-items-center social-grid">
                    <div className="col-md-3 col-sm-6 my-4" data-aos="fade-up">
                        <a
                            href="https://www.facebook.com/autotradegt"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img className="img-fluid img-brand d-block mx-auto" src={facebook} alt="..." />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-4" data-aos="fade-up">
                        <a
                            href="https://www.instagram.com/autotradegt/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img className="img-fluid img-brand d-block mx-auto" src={instagram} alt="..." />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-4" data-aos="fade-up">
                        <a
                            href="https://wa.me/50257458394"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img className="img-fluid img-brand d-block mx-auto" src={whatsapp} alt="..." />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-4" data-aos="fade-up">
                        <a
                            href="https://www.tiktok.com/@autotradegt?"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img className="img-fluid img-brand d-block mx-auto" src={tiktok} alt="..." />
                        </a>
                    </div>
                </div>
            </div>
        </div>    
    )
}
