import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="inner">
                <div className="col4 fl"> USC Research Computing<br /> 3434 South Grand Avenue<br />3rd Floor (CAL Building)<br /> Los Angeles, CA 90089<br />
                    <a href="mailto:hpc@usc.edu" target="_blank">hpc@usc.edu</a>
                    <div className="social">
                        <a href="https://twitter.com/usccarc"><i className="fa fa-twitter fa-2x"></i></a>
                        <a href="https://github.com/uschpc"><i className="fa fa-github fa-2x"></i></a>
                        <a href="https://www.youtube.com/channel/UCSkVXChGDx_LIRvTwdy5gVQ?view_as=subscriber"><i className="fa fa-youtube fa-2x"></i></a>
                    </div>
                </div>
                <div className="national-caps2">
                    <a href="/about/mission">Mission</a>
                    <a href="https://usccareers.usc.edu/">Jobs</a>
                </div>
                <div className="subscribe">
                    <span className="national-caps2">
                        <p>Mailing List</p>
                    </span>
                    <br /> Sign up to receive information about upcoming<br />
                    events, exhibitions, school news and more.
                    <br />
                    <div id="mc_embed_signup">
                        <form action="https://usc.us10.list-manage.com/subscribe/post?u=1bdd19e9fa2d811ef66b3485a&amp;id=a97e98a50e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                            <label htmlFor="mce-EMAIL" style={{display: "none"}}>Subscribe</label>
                            <input type="email" name="EMAIL" className="email-input" id="mce-EMAIL" placeholder="email address" required />
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="Subscribe-button" />
                            </div>
                        </form>
                    </div>
                    {/* <form action="https://hpc-discourse.usc.edu/signup" >
                        <input className="email-input" type="text" />
                        <button className="subscribe_button">subscribe</button>
                            <div className="login">
                                <a href="#" className="btn login-to-user-portal">
                                    <span className="txt">subscribe
                                    </span><span className="round">
                                        <i className="fa fa-chevron-right"></i>
                                    </span>
                                </a>
                            </div>
                    </form> */}
                </div>
                <a href="https://itservices.usc.edu/" target="_BLANK" className="logo-footer">
                    <div className="usc-logo"></div>
                </a>
            </div>
        </div>
    )
}

export default Footer;
