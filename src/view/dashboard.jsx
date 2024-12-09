import sliderImage from '../assets/slider-image.png'
import 'boxicons/css/boxicons.min.css';

function Header() {
    return(
        <header>
            <nav className="navbar">
                <div className="logo">
                    <h2>LIBRARY</h2>
                </div>

                <div className="navmenu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#featured">Featured</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>

                    <div className="search-box">
                        <input type="text" name="search" id="search" className="search" placeholder="Search..." />
                        <i className='bx bx-search'></i>

                        <a href="user#" id="openModalLink"><i className='bx bx-user'></i></a>
                    </div>
                </div>
            </nav>

            <div className="main-header">
                <div className="header">
                    <h5>LIBRARY SYSTEM</h5>
                    <h2>Explore online E-books</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quas assumenda, ducimus facere esse natus veritatis iure</p>

                    <a href="#explore" className="btn-explore">Explore</a>
                </div>

                <img src={sliderImage} alt="slider"/>
            </div>
        </header>
    );
}

export default Header