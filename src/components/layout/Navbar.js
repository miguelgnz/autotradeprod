import React, { Component } from 'react'
import navbarlogo from '../../assets/navbar-logo.svg'


class Navbar extends Component {
    state = {
        clicked: false,
        top: true
    }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    }

    render() {
        document.addEventListener('scroll', this.navbarShrink);
        return (
            <nav className={this.state.top ? 'navbar navbar-expand-lg navbar-dark fixed-top' : 'navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink'}
                id="mainNav"
            >
                <div className="container">
                    <a className="navbar-brand" href="#page-top"><img src={navbarlogo} alt="..." /></a>
                    <button
                        className={this.state.clicked ? 'navbar-toggler' : 'navbar-toggler collapsed'}
                        onClick={this.handleClick}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded={this.state.clicked ? 'true' : 'false'}
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className={this.state.clicked ? 'navbar-collapse collapse show' : 'navbar-collapse collapse'}
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Destacado</a></li>
                            <li className="nav-item"><a className="nav-link" href="#social">Contacto</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">Quienes somos</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;