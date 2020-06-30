import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="inner">
                <div className="col4 fl"> USC Research Computing<br /> 3434 South Grand Avenue<br />3rd Floor, Suite 302 (?)<br /> Los Angeles, CA 90089<br /><br />
                    <a href="mailto:hpc@usc.edu" target="_blank">hpc@usc.edu</a>
                    <div className="social">
                        
                        <i className="fa fa-youtube fa-2x"></i>
                        <i className="fa fa-twitter fa-2x"></i>
                        <i className="fa fa-github fa-2x"></i>
                        {/* <a className="sicon facebook" href="#" target="_blank" title="Facebook"></a> */}
                        {/* <a className="sicon twitter" href="#" target="_blank" title="Twitter"></a>
                        <a className="sicon instagram" href="#" target="_blank" title="Instagram"></a>
                        <a className="sicon youtube" href="#" target="_blank" title="Youtube"></a> */}
                    </div>
                </div>
                <div className="national-caps2">
                    <a href="/about/mission">Mission</a>
                    <a href="/jobs">Jobs</a>
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
                        {/* <button className="subscribe_button">subscribe</button> */}
                            <div className="subscribe">
                                <a href="#" class="btn login-to-user-portal">
                                    <span class="txt">subscribe
                                    </span><span class="round">
                                        <i class="fa fa-chevron-right"></i>
                                    </span>
                                </a>
                            </div>
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