import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';
import SearchProject from './SearchContainerTools';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactHtmlParser from 'react-html-parser';


const SoftwarePath = ({ dataset }) => {
    const [path, updatePath] = useState('/project')
    const [copied, updatecopied] = useState(false)
    const [html, setHtml] = useState('')
    const handleSelection = (e) => {
        const value = e.target.value
        updatePath(value)
        updatecopied(false)
    }
    return (
    <div>
        <div className="table-of-tools">
            <div class="form-group">
                <div class="input-group">
                    <input class="form-control genome" id="path" type="text" value={path} />
                    <div class="input-group-addon" >
                        <CopyToClipboard text={path}
                            onCopy={() => updatecopied(true)}>
                            <button class="btnz" type="button" data-clipboard-demo="" data-clipboard-target="#path">
                                <img class="clippy" src="/images/clippy.svg" alt="Copy to clipboard" />
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </div>
        <table id="software-path" class="tg scroll">
            <thead>
            <tr>
                <th class="tg-0qmj" rowspan="2">Organism</th>
                <th class="tg-0qmj" rowspan="2">Source</th>
                <th class="tg-0qmj" rowspan="2">Build</th>
                <th class="tg-0qmj">
                <tr>
                    <th>AbundantSequences</th>
                    <th>BWAIndex</th>
                    <th>Bowtie2Index</th>
                    <th>BowtieIndex</th>
                    <th>Chromosomes</th>
                    <th>WholeGenomeFasta</th>
                    <th>Methylation</th>
                    <th>WholeGenomeFasta</th>
                </tr>
                </th>
            </tr>
            
            </thead>
            { 
                dataset.map(item => {
                    return (<tbody>
                            <tr>
                                <td rowspan="4" class="tg-dc35 organism">{item.organism}</td>
                                <td>
                                    {item.sources.map(source => {
                                        return <p class="source">{source.name}</p>
                                    })}
                                </td>
                                <td>
                                    {item.sources.map(source => {
                                        return source.build.map(build => {
                                            return <p>{build.name}</p>
                                        })
                                    })}
                                </td>
                                {item.sources.map(source => {
                                    return source.build.map((build, index) => {
                                        return <tbody> { Object.keys(build.Sequence).map(seq => {
                                            return <td className="checkbox" style={{ borderBottom: 'none'}}><input type="radio" class="genome" name="genome" value={build.Sequence[seq]} onChange={(e) => handleSelection(e)} /></td>
                                        }) } </tbody>
                                    })
                                })}
                                {/* <td rowspan="4" class="tg-dc35">{item.organism}</td> */}
                            </tr>
                        </tbody>)

                })
            } 
    </table>
</div>
    
    )
}

export default SoftwarePath 