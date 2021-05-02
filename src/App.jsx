import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="header">
                    <h2 className="gray">Project Status</h2>
                    <h1><span className="red">Strategic</span> <span className="blue">Capabilities</span></h1>
                </div>
                <div className="stages">
                    <div className="stage">
                        <div className="title">Experiment</div>
                        <div className="cards">
                            <div className="card">Notification Center<span className="tooltip">More Info</span></div>
                            <div className="card">Flash Briefing<span className="tooltip">More Info</span></div>
                            <div className="card">Invoice Validation<span className="tooltip">More Info</span></div>
                            <div className="card">Virtual PRG<span className="tooltip">More Info</span></div>
                            <div className="card">QBR<span className="tooltip">More Info</span></div>
                        </div>
                    </div>
                    <div className="stage">
                        <div className="title">Prototype</div>
                        <div className="cards">
                            <div className="card">Email Productivity<span className="tooltip">More Info</span></div>
                            <div className="card">OCR<span className="tooltip">More Info</span></div>
                            <div className="card">WorkFlow Transparency<span className="tooltip">More Info</span></div>
                        </div>
                    </div>
                    <div className="stage">
                        <div className="title">In Development</div>
                        <div className="cards">
                            <div className="card">Able Chat</div>
                            <div className="card">Validation Engine</div>
                        </div>
                    </div>
                    <div className="stage">
                        <div className="title">Pilot</div>
                        <div className="cards">
                            <div className="card">OSA</div>
                        </div>
                    </div>
                    <div className="stage">
                        <div className="title">Production</div>
                        <div className="cards">
                            <div className="card">Supplier 360<span className="tooltip last">More Info</span></div>
                            <div className="card">Supplier Portal</div>
                            <div className="card">Smart Alerts</div>
                            <div className="card">Metadata Assist</div>
                            <div className="card">SSM</div>
                            <div className="card">IA Vulnerabilities</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }


}

export default App;