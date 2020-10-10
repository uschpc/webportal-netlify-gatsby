import React, { useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';
import SearchProject from './SearchContainerTools';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const SoftwarePath = () => {
    const [path, updatePath] = useState('/project')
    const [copied, updatecopied] = useState(false)
    const handleSelection = (e) => {
        const value = e.target.value
        console.log(path)
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
                {/* {copied ? <span style={{color: 'red'}}>Copied.</span> : null} */}
            </div>
        </div>
        <table id="myTable2" class="tg scroll">
            <thead>
            <tr>
                <th class="tg-0qmj" rowspan="2">Organism</th>
                <th class="tg-0qmj" rowspan="2">Source</th>
                <th class="tg-0qmj" rowspan="2">Build</th>
                <th class="tg-0qmj">Whole Genome</th>
                <th class="tg-0qmj" colspan="3" >Index Files</th>
            </tr>
            <tr>
                <th class="tg-0qmj">FASTA</th>
                <th class="tg-0qmj">BWA</th>
                <th class="tg-0qmj">Bowtie2</th>
                <th class="tg-0qmj">STAR2</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="4" class="tg-dc35">Arabidopsis thaliana</td>
                    <td rowspan="2" class="tg-dc35" >Ensembl</td>
                    <td class="tg-dc35">TAIR9</td>
                    <td class="tg-dc35">
                    <input type="radio" class="genome" name="genome" value="/project/genomes/Arabidopsis_thaliana/Ensembl/TAIR9/Sequence/WholeGenomeFasta/genome.fa" onChange={(e) => handleSelection(e)}/>
                    </td>
                    <td class="tg-dc35">
                    <input type="radio" class="genome" name="genome" value="/project/genomes/Arabidopsis_thaliana/Ensembl/TAIR9/Sequence/BWAIndex/" onChange={(e) => handleSelection(e)} />
                    </td>
                    <td class="tg-dc35">
                    <input type="radio" class="genome" name="genome" value="/project/genomes/Arabidopsis_thaliana/Ensembl/TAIR9/Sequence/Bowtie2Index/" onChange={(e) => handleSelection(e)} />
                    </td>
                    <td class="tg-dc35">
                     <input type="radio" class="genome" name="genome" value="/project/genomes/Arabidopsis_thaliana/Ensembl/TAIR9/Sequence/Bowtie2Index/testhere" onChange={(e) => handleSelection(e)} />
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td rowspan="4" class="tg-dc35">Arabidopsis thaliana</td>
                    <td rowspan="2" class="tg-dc35" >Ensembl</td>
                    <td class="tg-dc35">TAIR9</td>
                    <td class="tg-dc35">
                    <input type="radio" class="genome" name="genome" value="/project/genomes/Arabidopsis_thaliana/Ensembl/TAIR9/Sequence/WholeGenomeFasta/genome.fa" onChange={(e) => handleSelection(e)} />
                    </td>
                    <td class="tg-dc35">
                    <input type="radio" class="genome" name="genome" value="/project/genomes/Arabidopsis_thaliana/Ensembl/TAIR9/Sequence/BWAIndex/" onChange={(e) => handleSelection(e)} />
                    </td>
                    <td class="tg-dc35">
                    <input type="radio" class="genome" name="genome" value="/project/genomes/Arabidopsis_thaliana/Ensembl/TAIR9/Sequence/Bowtie2Index/" onChange={(e) => handleSelection(e)} />
                    </td>
                    <td class="tg-dc35">
                    </td>
                </tr>
            </tbody>
    </table>
</div>
    
    )
}

export default SoftwarePath 