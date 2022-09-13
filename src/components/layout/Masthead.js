import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Masthead = () => {
    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])

    return (
        <header className="masthead" data-aos="fade-up" id="page-top">
            <div className="container">
                <div className="masthead-subheading">Bienvenidos a nuestra página web</div>
                <div className="masthead-heading text-uppercase">Auto Trade GT</div>
            </div>
        </header>
    )
}
