/* Faltou colocar o tempo de volta em cada quadro de equipe */

import React from 'react';
import ReactDOM from 'react-dom';
import DynamicForm from './components/DynamicForm'
import WatchList from './components/WatchList'
import Top10 from './components/Top10'
import './index.css';

function LogoBar(props) {

    return (
        <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
            <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={props.onClick}><i className="fa fa-bars"></i>  Menu</button>
            <span className="w3-bar-item w3-right">Estratégia de Enduro</span>
        </div>
    )

}

function NavBar(props) {

    return (
        <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={props.styleNav} id="mySidebar">
            <br />
            <div className="w3-container w3-row">
                <div className="w3-col s4">
                    <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle w3-margin-right" style={{ width: '46px' }} />
                </div>
                <div className="w3-col s8 w3-bar">

                    <span>Welcome, <strong>Guest</strong></span>


                </div>
            </div>
            <hr />
            <div className="w3-container">
                <h5>Dashboard</h5>
            </div>
            <div className="w3-bar-block">
                <button className="w3-bar-item w3-button w3-padding" onClick={props.onClickAddButton}>Add Team <i className="w3-padding fa fa-plus"></i></button>
                {/*<button className="w3-bar-item w3-button w3-padding" onClick={props.onClickEditButton}>Edit Team <i className="w3-padding fa fa-pencil"></i></button>*/}
            </div>
        </nav>
    )
}

function OverlayBG(props) {
    return (
        <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={props.onClick} style={props.styleBG} title="close side menu" id="myOverlay"></div>
    )
}

function ModalAdd(props) {
    return (
        <div className="w3-modal" style={props.styleModalAdd}>
            <div className="w3-modal-content w3-animate-zoom">
                <div className="w3-container w3-padding w3-red">
                    <span onClick={props.onClickClose}
                        className="w3-button w3-red w3-right w3-xxlarge"><i className="fa fa-remove"></i></span>
                    <h2>Add Team</h2>
                </div>
                <DynamicForm
                    title="Registration"
                    model={[
                        { key: "team-name", label: "Team Name", placeholder: "Team's Name", props: { required: true } },
                        { key: "car-number", label: "Car Number", type: "number", placeholder: "Car #", props: { required: true } },
                        { key: "cost-event", label: "Cost Event", type: "number", placeholder: "0-100 pts", props: { min: 0, max: 100 } },
                        { key: "design-event", label: "Design Event", type: "number", placeholder: "0-150 pts", props: { min: 0, max: 150 } },
                        { key: "sales-presentation", label: "Sales Presentation", type: "number", placeholder: "0-50 pts", props: { min: 0, max: 50 } },
                        { key: "acceleration", label: "Acceleration", type: "number", placeholder: "0-75 pts", props: { min: 0, max: 75 } },
                        { key: "maneuverability", label: "Maneuverability", type: "number", placeholder: "0-75 pts", props: { min: 0, max: 75 } },
                        { key: "hill-climb", label: "Hill Climb", type: "number", placeholder: "0-75 pts", props: { min: 0, max: 75 } },
                        { key: "suspension", label: "Suspension", type: "number", placeholder: "0-75 pts", props: { min: 0, max: 75 } },
                        { key: "endurance", label: "Endurance", type: "number", placeholder: "0-400 pts", props: { min: 0, max: 400 } },
                        { key: "penalties", label: "Penalties", type: "number" }
                    ]}
                    onSubmit={(model) => { props.onSubmit(model) }}
                    onClickClose={() => { props.onClickClose() }}
                />
            </div>
        </div>
    )
}

function ModalEdit(props) {
    return (

        <div id="id01" className="w3-modal" style={props.styleModalEdit}>
            <div className="w3-modal-content w3-animate-zoom">
                <div className="w3-container w3-padding w3-red">
                    <span onClick={props.onClickClose}
                        className="w3-button w3-red w3-right w3-xxlarge"><i className="fa fa-remove"></i></span>
                    <h2>Send Mail</h2>
                </div>
                <div className="w3-panel">
                    <label>Team Name</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Team's Name" />
                    <label>Car Number</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="Car #" />
                    <label>Cost Event</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-100 pts" />
                    <label>Design Event</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-150 pts" />
                    <label>Sales Presentation</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-50 pts" />
                    <label>Acceleration</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-75 pts" />
                    <label>Maneuverability</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-75 pts" />
                    <label>Hill Climb</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-75 pts" />
                    <label>Suspension</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-75 pts" />
                    <label>Endurance</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-400 pts" />
                    <label>Penalties</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="Optional" />
                    <div className="w3-section">
                        <a className="w3-button w3-red" onClick={props.onClickClose}>Cancel  <i className="fa fa-remove"></i></a>
                        <a className="w3-button w3-light-grey w3-right" onClick={props.onClickSave}>Send  <i className="fa fa-floppy-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            styleNav: {
                zIndex: 3,
                width: '300px',
                display: 'none'
            },
            styleBG: {
                mouse: 'pointer',
                display: 'none'
            },
            styleModalAdd: {
                zIndex: 4,
                display: 'none',
            },
            styleModalEdit: {
                zIndex: 4,
                display: 'none'
            },
            data: [
                { id: 1, name: "a", age: 29, qualification: "B.Com", rating: 3 },
                { id: 2, name: "b", age: 35, qualification: "B.Sc", rating: 5 },
                { id: 3, name: "c", age: 42, qualification: "B.E", rating: 3 }
            ]
        }
        this.handleClickOpenModalAdd = this.handleClickOpenModalAdd.bind(this)
        this.handleClickOpenModalEdit = this.handleClickOpenModalEdit.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClickClose = this.handleClickClose.bind(this)
    }

    onSubmit(model) {
        model.id = +new Date()
        alert("Team Saved!")
        this.setState({
            styleNav: {
                zIndex: 3,
                width: '300px',
                display: 'none'
            },
            styleBG: {
                mouse: 'pointer',
                display: 'none'
            },
            styleModalAdd: {
                zIndex: 4,
                display: 'none',
            },
            styleModalEdit: {
                zIndex: 4,
                display: 'none'
            },
            data: [model, ...this.state.data]
        })
    }

    renderModalAdd() {
        return (
            <ModalAdd
                styleModalAdd={this.state.styleModalAdd}
                onClickClose={() => this.handleClickClose()}
                onSubmit={(model) => this.onSubmit(model)}
            />
        )
    }

    renderModalEdit() {
        return (
            <ModalEdit
                styleModalEdit={this.state.styleModalEdit}
                onClickClose={() => this.handleClickClose()}
            />
        )
    }

    handleClickOpenModalAdd() {
        const isOpenAdd = this.state.styleModalAdd.display
        if (isOpenAdd === 'none') {
            this.setState({
                styleModalAdd: {
                    zIndex: 4,
                    display: 'block',
                },
                styleModalEdit: {
                    zIndex: 4,
                    display: 'none'
                }
            })
        } else {
            this.setState({
                styleModalAdd: {
                    zIndex: 4,
                    display: 'none'
                },
                styleModalEdit: {
                    zIndex: 4,
                    display: 'none'
                }
            })
        }
    }

    handleClickOpenModalEdit() {
        const isOpenEdit = this.state.styleModalEdit.display
        if (isOpenEdit === 'none') {
            this.setState({
                styleModalAdd: {
                    zIndex: 4,
                    display: 'none'
                },
                styleModalEdit: {
                    zIndex: 4,
                    display: 'block'
                }
            })
        } else {
            this.setState({
                styleModalAdd: {
                    zIndex: 4,
                    display: 'none'
                },
                styleModalEdit: {
                    zIndex: 4,
                    display: 'none'
                }
            })
        }
    }

    renderLogoBar() {
        return (
            <LogoBar
                onClick={() => this.handleClickOpen()}
            />
        )
    }

    renderNav() {
        return (
            <NavBar
                styleNav={this.state.styleNav}
                onClick={() => this.handleClickClose()}
                onClickAddButton={() => this.handleClickOpenModalAdd()}
                onClickEditButton={() => this.handleClickOpenModalEdit()}
            />
        )
    }

    renderOverlayBG() {
        return (
            <OverlayBG
                styleBG={this.state.styleBG}
                onClick={() => this.handleClickClose()}
            />
        )
    }

    renderWatchList1() {
        return (
            <WatchList
            className="w3-container grid-container w3-red w3-padding-16"
            team="Car-kará"
            teamA="FEI Baja"
            lapsA="1"
            teamB=""
            lapsB="0"
            position="1"
            laps="54"
            score="897"
            overall="1"
            flag="fa fa-flag-checkered w3-xlarge"
            />
        )
    }

    renderWatchList2() {
        return (
            <WatchList className="w3-container grid-container w3-blue w3-padding-16"
            team="Car-kará"
            teamA="FEI Baja"
            lapsA="1"
            teamB=""
            lapsB="0"
            position="1"
            laps="54"
            score="897"
            overall="1"
            flag="fa w3-xlarge"
            />
        )
    }

    renderWatchList3() {
        return (
            <WatchList className="w3-container grid-container w3-teal w3-padding-16"
            team="Car-kará"
            teamA="FEI Baja"
            lapsA="1"
            teamB=""
            lapsB="0"
            position="1"
            laps="54"
            score="897"
            overall="1"
            flag="fa w3-xlarge"
            />
        )
    }

    renderWatchList4() {
        return (
            <WatchList className="w3-container grid-container w3-orange w3-padding-16"
            team="Car-kará"
            teamA="FEI Baja"
            lapsA="1"
            teamB=""
            lapsB="0"
            position="1"
            laps="54"
            score="897"
            overall="1"
            flag="fa w3-xlarge"
            />
        )
    }

    renderTop10() {
        return (
            <Top10 />
        )
    }

    handleClickOpen() {
        const display = this.state.styleNav.display
        if (display === 'none') {
            this.setState({
                styleNav: {
                    zIndex: 3,
                    width: '300px',
                    display: 'block'
                },
                styleBG: {
                    mouse: 'pointer',
                    display: 'block'
                },
                styleModalAdd: {
                    zIndex: 4,
                    display: 'none'
                },
                styleModalEdit: {
                    zIndex: 4,
                    display: 'none'
                }
            })
        } else {
            this.setState({
                styleNav: {
                    zIndex: 3,
                    width: '300px',
                    display: 'none'
                },
                styleBG: {
                    mouse: 'pointer',
                    display: 'none'
                },
                styleModalAdd: {
                    zIndex: 4,
                    display: 'none'
                },
                styleModalEdit: {
                    zIndex: 4,
                    display: 'none'
                }
            })
        }
    }

    handleClickClose() {
        this.setState({
            styleNav: {
                zIndex: 3,
                width: '300px',
                display: 'none'
            },
            styleBG: {
                mouse: 'pointer',
                display: 'none'
            },
            styleModalAdd: {
                zIndex: 4,
                display: 'none'
            },
            styleModalEdit: {
                zIndex: 4,
                display: 'none'
            }
        })
    }

    render() {
        return (

            <div>
                {this.renderLogoBar()}
                {this.renderNav()}
                {this.renderOverlayBG()}
                {this.renderModalAdd()}
                {this.renderModalEdit()}



                <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>

                    <header className="w3-container" style={{ paddingTop: '22px' }}>
                        <h5><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
                    </header>

                    <div className="w3-row-padding w3-margin-bottom">
                        <div className="w3-quarter">
                            {this.renderWatchList1()}
                        </div>
                        <div className="w3-quarter">
                            {this.renderWatchList2()}
                        </div>
                        <div className="w3-quarter">
                            {this.renderWatchList3()}
                        </div>
                        <div className="w3-quarter">
                            {this.renderWatchList4()}
                        </div>
                    </div>

                    <div className="w3-panel">
                        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                            <div className="w3-third">
                                <h5>Favorite Team</h5>
                                <div>
                                    <div className="w3-container grid-container w3-blue-grey w3-padding-16">
                                        <div className="w3-left" style={{ paddingLeft: "20px", paddingTop: "20px" }}><i className="fa fa-flag-checkered w3-xlarge"><b> Car-kará</b></i></div>
                                        <div className="w3-right  " style={{ textAlign: 'right', padding: "20px" }}>
                                            <h7>-</h7>
                                            <h3>1º - <b>52 voltas</b></h3>
                                            <h7>-1 FEI Baja</h7>
                                        </div>
                                        <div className="w3-clear"></div>
                                        <div style={{ padding: "20px" }}>
                                            <br />
                                            <h5>912 pontos</h5>
                                            <h3><b>1º Lugar</b></h3>
                                        </div>

                                        <div align="right">
                                            <div className="grid-container">
                                                <div className="grid-container">
                                                    <h5><b>Adicionar volta <i className="fa fa-plus-square"></i></b></h5>
                                                </div>
                                                <div className="grid-container" >
                                                    <h5><b>Subtrair volta <i className="fa fa-minus-square"></i></b></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.renderTop10()}
                        </div>
                    </div>
                    {/*<hr />
                    <div className="w3-container">
                        <h5>General Stats</h5>
                        <p>New Visitors</p>
                        <div className="w3-grey">
                            <div className="w3-container w3-center w3-padding w3-green" style={{ width: '25%' }}>+25%</div>
                        </div>

                        <p>New Users</p>
                        <div className="w3-grey">
                            <div className="w3-container w3-center w3-padding w3-orange" style={{ width: '50%' }}>50%</div>
                        </div>

                        <p>Bounce Rate</p>
                        <div className="w3-grey">
                            <div className="w3-container w3-center w3-padding w3-red" style={{ width: '75%' }}>75%</div>
                        </div>
                    </div>
                    <hr />

                    <div className="w3-container">
                        <h5>Countries</h5>
                        <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                            <tr>
                                <td>United States</td>
                                <td>65%</td>
                            </tr>
                            <tr>
                                <td>UK</td>
                                <td>15.7%</td>
                            </tr>
                            <tr>
                                <td>Russia</td>
                                <td>5.6%</td>
                            </tr>
                            <tr>
                                <td>Spain</td>
                                <td>2.1%</td>
                            </tr>
                            <tr>
                                <td>India</td>
                                <td>1.9%</td>
                            </tr>
                            <tr>
                                <td>France</td>
                                <td>1.5%</td>
                            </tr>
                        </table><br />
                        <button className="w3-button w3-dark-grey">More Countries  <i className="fa fa-arrow-right"></i></button>
                    </div>
                    <hr />
                    <div className="w3-container">
                        <h5>Recent Users</h5>
                        <ul className="w3-ul w3-card-4 w3-white">
                            <li className="w3-padding-16">
                                <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-left w3-circle w3-margin-right" style={{ width: '35px' }} />
                                <span className="w3-xlarge">Mike</span><br />
                            </li>
                            <li className="w3-padding-16">
                                <img src="https://www.w3schools.com/w3images/avatar5.png" className="w3-left w3-circle w3-margin-right" style={{ width: '35px' }} />
                                <span className="w3-xlarge">Jill</span><br />
                            </li>
                            <li className="w3-padding-16">
                                <img src="https://www.w3schools.com/w3images/avatar6.png" className="w3-left w3-circle w3-margin-right" style={{ width: '35px' }} />
                                <span className="w3-xlarge">Jane</span><br />
                            </li>
                        </ul>
                    </div>
                    <hr />

                    <div className="w3-container">
                        <h5>Recent Comments</h5>
                        <div className="w3-row">
                            <div className="w3-col m2 text-center">
                                <img className="w3-circle" src="https://www.w3schools.com/w3images/avatar3.png" style={{ width: '96px', height: '96px' }} />
                            </div>
                            <div className="w3-col m10 w3-container">
                                <h4>John <span className="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span></h4>
                                <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                            </div>
                        </div>

                        <div className="w3-row">
                            <div className="w3-col m2 text-center">
                                <img className="w3-circle" src="https://www.w3schools.com/w3images/avatar1.png" style={{ width: '96px', height: '96px' }} />
                            </div>
                            <div className="w3-col m10 w3-container">
                                <h4>Bo <span className="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span></h4>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="w3-container w3-dark-grey w3-padding-32">
                        <div className="w3-row">
                            <div className="w3-container w3-third">
                                <h5 className="w3-bottombar w3-border-green">Demographic</h5>
                                <p>Language</p>
                                <p>Country</p>
                                <p>City</p>
                            </div>
                            <div className="w3-container w3-third">
                                <h5 className="w3-bottombar w3-border-red">System</h5>
                                <p>Browser</p>
                                <p>OS</p>
                                <p>More</p>
                            </div>
                            <div className="w3-container w3-third">
                                <h5 className="w3-bottombar w3-border-orange">Target</h5>
                                <p>Users</p>
                                <p>Active</p>
                                <p>Geo</p>
                                <p>Interests</p>
                            </div>
                        </div>
                    </div>*/}

                    <hr />

                    <footer className="w3-container w3-padding-16 w3-dark-grey">
                        <h4>FOOTER</h4>
                        <pre style={{ width: "300px" }}>
                            {JSON.stringify(this.state.data)}
                        </pre>
                        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
                    </footer>


                </div >
            </div >
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
