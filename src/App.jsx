import React, {Component} from 'react';
import './App.css';
import supplierImage from './images/supplier.jpg'

class App extends Component {

    onDragStart(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    disallowDrop(ev) {
        ev.stopPropagation();
    }

    onDrop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(ev.target);
        ev.target.appendChild(document.getElementById(data));
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <h2 className="gray">Project Status</h2>
                    <h1><span className="red">Strategic</span> <span className="blue">Capabilities</span></h1>
                </div>
                <div className="stages">
                    <div className="stage"/>
                    <div className="stage"><div className="title">BACKLOG</div></div>
                    <div className="stage"><div className="title">DEVELOPMENT</div></div>
                    <div className="stage"><div className="title">PILOT</div></div>
                    <div className="stage"><div className="title">PRODUCTION</div></div>
                </div>
                <div className="stages">
                    <div className="stage"><img src={supplierImage} alt="" /></div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="1" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>AE Persona (Q4)<span className="tooltip">More Info</span></div>
                        <div className="card" id="2" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>TPBC Automation (Q3)<span className="tooltip">More Info</span></div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="3" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Contracts to RRs (Q2)</div>
                        <div className="card" id="4" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Supplier Diversity (Q2)</div>
                        <div className="card" id="5" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Unmonitored Suppliers (Q3)</div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="6" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>OSA</div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="7" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Supplier Portfolios (Q3)<span className="tooltip last">More Info</span></div>
                    </div>
                </div>
                <div className="divider"/>
                <div className="stages">
                    <div className="stage"><img src={supplierImage} alt="" /></div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="8" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>AE Persona (Q4)<span className="tooltip">More Info</span></div>
                        <div className="card" id="9" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>TPBC Automation (Q3)<span className="tooltip">More Info</span></div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="10" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Contracts to RRs (Q2)</div>
                        <div className="card" id="11" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Supplier Diversity (Q2)</div>
                        <div className="card" id="12" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Unmonitored Suppliers (Q3)</div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="13" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>OSA</div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="14" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Supplier Portfolios (Q3)<span className="tooltip last">More Info</span></div>
                        <div className="card" id="15" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Supplier Portfolios (Q3)<span className="tooltip last">More Info</span></div>
                    </div>
                </div>
                <div className="divider"/>
                <div className="stages">
                    <div className="stage"><img src={supplierImage} alt="" /></div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="16" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>AE Persona (Q4)<span className="tooltip">More Info</span></div>
                        <div className="card" id="17" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>TPBC Automation (Q3)<span className="tooltip">More Info</span></div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="18" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Contracts to RRs (Q2)</div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="19" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>OSA</div>
                    </div>
                    <div className="stage" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                        <div className="card" id="20" onDragOver={this.disallowDrop} draggable="true" onDragStart={this.onDragStart}>Supplier Portfolios (Q3)<span className="tooltip last">More Info</span></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;