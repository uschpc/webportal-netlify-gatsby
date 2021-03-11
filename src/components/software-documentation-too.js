import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';
import SearchProject from './SearchContainerTools';
import SoftwarePath from './software-path';
import dataset from '../genomes_dataset.json';

const SoftwareDocumentationTools = () => {
    return (
    <div className="table-of-tools">
        <SearchProject />
        <SoftwarePath dataset={dataset} />
    </div>
    )
}

export default SoftwareDocumentationTools 