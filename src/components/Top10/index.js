import React from 'react'
import ReactDOM from 'react-dom'

export default class Top10 extends React.Component {
    state = {

    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="w3-twothird">
                <h5>Feeds</h5>
                <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                    <tr>
                        <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                        <td>New record, over 90 views.</td>
                        <td><i>10 mins</i></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
                        <td>Database error.</td>
                        <td><i>15 mins</i></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
                        <td>New record, over 40 users.</td>
                        <td><i>17 mins</i></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-comment w3-text-red w3-large"></i></td>
                        <td>New comments.</td>
                        <td><i>25 mins</i></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-bookmark w3-text-blue w3-large"></i></td>
                        <td>Check transactions.</td>
                        <td><i>28 mins</i></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
                        <td>CPU overload.</td>
                        <td><i>35 mins</i></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
                        <td>New shares.</td>
                        <td><i>39 mins</i></td>
                    </tr>
                </table><br />
                        <button className="w3-button w3-dark-grey">More Countries  <i className="fa fa-arrow-right"></i></button>
            </div>
        )
    }
}