import { Web3Button } from "./Web3Button";

const Topbar = () => {
    return (
        <div id="list-item-1">
            <div className="rn-top-bar-area">
                <div className="d-none d-lg-block">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search Here..."
                            className="form-control bg-color--2"
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary-alta btn-outline-secondary"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-search"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line
                                        x1="21"
                                        y1="21"
                                        x2="16.65"
                                        y2="16.65"
                                    ></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="contact-area">
                    <div className="setting-option">
                        <div className="icon-box">
                            <a title="Contact With Us" href="/">
                                <i className="feather-phone"></i>
                            </a>
                        </div>
                    </div>
                    <div className="setting-option">
                        <div className="icon-box">
                            <a title="Message" href="#">
                                <i className="feather-message-circle"></i>
                            </a>
                        </div>
                    </div>
                    <div className="setting-option rn-icon-list notification-badge">
                        <div className="icon-box">
                            <a href="activity.html">
                                <i className="feather-bell"></i>
                                <span className="badge">2</span>
                            </a>
                        </div>
                    </div>
                    <div className="setting-option header-btn">
                        <div className="icon-box">
                            <Web3Button className="btn btn-primary-alta btn-small">
                                Connect
                            </Web3Button>
                        </div>
                    </div>
                    <div className="setting-option mobile-menu-bar ml--5 d-block d-lg-none">
                        <div className="hamberger icon-box">
                            <button className="hamberger-button">
                                <i className="feather-menu"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Topbar;
