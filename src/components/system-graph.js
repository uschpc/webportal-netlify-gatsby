import React from 'react';

const SystemGraph = () => {
    return (
        <div className="shared system-status">
            <iframe src="https://hpc-grafana.usc.edu/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s&from=1593106620736&to=1593711420736&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>
        </div>
    )
}

export default SystemGraph;