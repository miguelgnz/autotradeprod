import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Auto Trade GT 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a
                            className="btn btn-dark btn-social mx-2"
                            href="https://wa.me/50257458394"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a
                            className="btn btn-dark btn-social mx-2"
                            href="https://www.facebook.com/autotradegt"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            className="btn btn-dark btn-social mx-2"
                            href="https://www.instagram.com/autotradegt/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="col-lg-3 text-lg-end">
                        <p className="me-3 text-decoration-none">Email: autotrade.gt@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
