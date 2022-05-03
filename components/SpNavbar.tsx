import Image from 'next/image';

const SpNavbar = () => {
    return (
        <div className="popup-mobile-menu one-page-vavigation-popup">
            <div className="inner">
                <div className="header-top">
                    <div className="logo logo-custom-css">
                        <a className="logo-light" href="index.html">
                            <Image
                                src="/assets/images/logo/logo-white.png"
                                alt="nft-logo"
                            />
                        </a>
                        <a className="logo-dark" href="index.html">
                            <Image
                                src="/assets/images/logo/logo-dark.png"
                                alt="nft-logo"
                            />
                        </a>
                    </div>
                    <div className="close-menu">
                        <button className="close-button">
                            <i className="feather-x"></i>
                        </button>
                    </div>
                </div>
                <nav>
                    <ul className="mainmenu" id="navbar-example2">
                        <li className="nav-item">
                            <a
                                className="nav-link smoth-animation"
                                href="#list-item-1"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link smoth-animation"
                                href="#list-item-2"
                            >
                                Live Auction
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link smoth-animation"
                                href="#list-item-3"
                            >
                                Newest Item
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link smoth-animation"
                                href="#list-item-4"
                            >
                                Explore Product
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SpNavbar;
