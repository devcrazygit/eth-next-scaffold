import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="d-none d-lg-block">
            <div className="header-area left-header-style d-flex">
                <div className="logo-area logo-custom-css">
                    <a className="logo-light" href="index.html">
                        <div className="logo-wrapper">
                            <Image
                                src="/assets/images/logo/logo-dark.png"
                                alt="nft-logo"
                                layout="fixed"
                                width={150}
                                height={150}
                            />
                        </div>
                    </a>
                </div>
                <div className="sidebar-nav-wrapper">
                    <nav className="mainmenu-nav">
                        <ul className="mainmenu list-group">
                            <li className="nav-item">
                                <a
                                    className="nav-link smoth-animation"
                                    href="#list-item-1"
                                >
                                    {' '}
                                    <i data-feather="home"></i>Home
                                </a>
                                <div></div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link smoth-animation"
                                    href="#list-item-2"
                                >
                                    {' '}
                                    <i data-feather="heart"></i>Live Auction
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link smoth-animation"
                                    href="#list-item-3"
                                >
                                    {' '}
                                    <i data-feather="trending-up"></i>Explore
                                    Product
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link smoth-animation"
                                    href="#list-item-4"
                                >
                                    {' '}
                                    <i data-feather="trending-up"></i>Newest
                                    Item
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="help-center-area mainmenu-nav mt--30">
                        <ul className="mainmenu">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {' '}
                                    <i data-feather="settings"></i>Settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="support.html">
                                    {' '}
                                    <i data-feather="activity"></i>Help Center
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="authore-profile">
                    <div className="thumbnail">
                        <Image
                            src="/assets/images/client/testimonial-1.jpg"
                            alt="Nft_marketplaces"
                            layout="intrinsic"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="au-content">
                        <p className="name">Mark Jordan</p>
                        <p className="blc">
                            Balance:<span className="value">12ETH</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
