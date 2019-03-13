import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const APIURL = "/events";

const EventItem = (props) => {
    const { name, type, location, date } = props;
    return (
        <div className='card card-body mb-3'>
            <div>
                <h4>{name} </h4>
                <ul className='list-group'>
                    <li className='list-group-item'>Type: {type}</li>
                    <li className='list-group-item'>Location: {location}</li>
                    <li className='list-group-item'>Date: {date}</li>
                </ul>
            </div>

        </div>
    );
}



class EventsList extends Component {

    constructor() {
        super();
        this.state = {
            events: []
        };
    }
    componentWillMount() {
        this.loadEvents();
    }
    loadEvents() {
        fetch(APIURL)
            .then(resp => {
                if (!resp.ok) {
                    if (resp.status >= 400 && resp.status < 500) {
                        return resp.json().then(data => {
                            let err = { errorMessage: data.message };
                            throw err;
                        });
                    } else {
                        let err = {
                            errorrMessage: "Please try again later, server is not responding"
                        };
                        throw err;
                    }
                }
                return resp.json();
            })
            .then(events => this.setState({ events }));
    }
    render() {
        const { events } = this.state;
        return (
            <div>{events.map(t =>
                <EventItem
                    name={t.eventname}
                    location={t.eventlocation}
                    type={t.eventtype}
                    date={t.eventdate} />
            )}</div>
        )
    }
}
export default EventsList



/*const EventItem = (props) => {
    onShowClick() {

    }
<span onClick={this.onShowClick}> ^</span>
*/