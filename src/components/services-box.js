import React from 'react';

const ServicesBox = () => {
    return (
        <div className="region usc-hpc">
            <div class="services-block">
            <div className="view view-services">
                <div className="view-content">
                    <ul>
                    <a href="#" class="btn-flip" data-back="Our department has helped enable the advancement of critical inquiry" data-front="Data Visualization"></a>
                    <a href="#" class="btn-flip" data-back="Formats a HTML string/file with your desired indentation level. The formatting rules are not configurable" data-front="Training &amp; Education"></a>
                    <a href="#" class="btn-flip" data-back="Formats a HTML string/file with your desired indentation level. The formatting rules are not configurable
                                    Note that the formatter" data-front="High Performance Computing"></a>
                    <a href="#" class="btn-flip" data-back="Formats a HTML string/file with your desired indentation level" data-front="Enabling Research"></a>

                    {/* <li className="views-row">
                        <img className="service-box-icon" src="/images/books-100.png" />
                        <a href="#">
                            <div className="mobile-container">
                                <h3>Enabling Research</h3>
                                <p></p>
                                <p>Our department has helped enable the advancement of critical inquiry</p>
                                <p></p>
                            </div>
                        </a>
                    </li> */}
                    {/* <li className="views-row">
                    <img className="service-box-icon" src="/images/heart-96.png" />
                        <a href="#">
                            <div className="mobile-container">
                                <h3>Data Visualization</h3>
                                <p></p>
                                <p>Formats a HTML string/file with your desired indentation level. The formatting rules are not configurable
                                </p>
                            </div>
                        </a>
                    </li> */}
                    {/* <li className="views-row">
                    <img className="service-box-icon" src="/images/training-100.png" />
                        <a href="#">
                            <div className="mobile-container">
                                <h3>Training &amp; Education</h3>
                                <p></p>
                                <p>Formats a HTML string/file with your desired indentation level. The formatting rules are not configurable
                                    Note that the formatter</p>
                            </div>
                        </a>
                    </li> */}
                    {/* <li className="views-row">
                        <img className="service-box-icon" src="/images/highfive-80.png" />
                        <a href="#">
                            <div className="mobile-container">
                                <h3>High Performance Computing</h3>
                                <p></p>
                                <p>Formats a HTML string/file with your desired indentation level.</p>
                            </div>
                        </a>
                    </li> */}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ServicesBox;