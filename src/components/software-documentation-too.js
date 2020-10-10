import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';
import SearchProject from './SearchContainerTools';
import SoftwarePath from './software-path';

const SoftwareDocumentationTools = () => {
    return (
    <div className="table-of-tools">
        <SearchProject />
        <SoftwarePath />
    </div>
    )
}

export default SoftwareDocumentationTools 