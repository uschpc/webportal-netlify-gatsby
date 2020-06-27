import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="inner">
                <div className="col4 fl"> USC Center for Advanced Research Computing<br /> Watt Hall, Suite 204<br /> Los Angeles, California<br /> 90089-0291<br /> (213) 740-2723<br />
                    <a href="mailto:hpc@usc.edu" target="_blank">hpc@usc.edu</a>
                    <div className="social">
                        <a className="sicon facebook" href="#" target="_blank" title="Facebook"></a>
                        <a className="sicon twitter" href="#" target="_blank" title="Twitter"></a>
                        <a className="sicon instagram" href="#" target="_blank" title="Instagram"></a>
                        <a className="sicon youtube" href="#" target="_blank" title="Youtube"></a>
                    </div>
                </div>
                <div className="national-caps2">
                    <a href="#">Jobs</a>
                    <a href="#">Press Room</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="subscribe">
                    <span className="national-caps2">
                        <p>Mailing List</p>
                    </span>
                    <br /> Sign up to receive information about upcoming<br />
                    events, exhibitions, school news and more.
                    <br />
                    <form action="https://hpc-discourse.usc.edu/signup" >
                        <input className="email-input" type="text" />
                        <button class="subscribe_button">subscribe</button>
                    </form>
                </div>
                <a href="https://usc.edu" target="_BLANK" className="logo-footer">
                    <div className="usc-logo"></div>
                </a>
            </div>
        </div>
    )
}

export default Footer;