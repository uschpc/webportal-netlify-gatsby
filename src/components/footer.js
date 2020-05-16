import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <a className="sicon facebook" href="#" target="_blank" title="Facebook"></a>
                <a className="sicon twitter" href="#" target="_blank" title="Twitter"></a>
                <a className="sicon instagram" href="#" target="_blank" title="Instagram"></a>
                <a className="sicon youtube" href="#" target="_blank" title="Youtube"></a>
            </div>
            <div className="inner">
                <div className="col4 fl"> USC Center for Advanced Research Computing<br /> Watt Hall, Suite 204<br /> Los Angeles, California<br /> 90089-0291<br /> (213) 740-2723<br />
                    <a href="mailto:hpc@usc.edu" target="_blank">hpc@usc.edu</a>
                </div>
                <div className="national-caps2">
                    <Router>
                        <Link to="#">Jobs</Link>
                    </Router>
                    <Router>
                        <Link to="#">Press Room</Link>
                    </Router>
                    <Router>
                        <Link to="#">Privacy Policy</Link>
                    </Router>
                </div>
                <div className="subscribe">
                    <span className="national-caps2">
                        <p>Mailing List</p>
                    </span>
                    <br /> Sign up to receive information about upcoming<br />
                    events, exhibitions, school news and more.
                    <br />
                    <input className="email-input" type="text" />
                </div>
                <a href="https://usc.edu" target="_BLANK">
                    <div className="usc-logo"></div>
                </a>
            </div>
        </div>
    )
}

export default Footer;