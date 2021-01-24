import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class PersonnelList extends React.Component {

    convertDate(dateISO) {
        const date = dateISO.slice(0,10).split('-');
        return `${date[2]}-${date[1]}-${date[0]}`;
    }

    render() {
        return (
            <div className="grid-large">
                {this.props.personnels.map((data) => (
                    <div className="card" key={data.login.username}>
                        <div className="card-header">
                            <p>Personnel ID : <b>{data.id.value ? data.id.value : '-'}</b></p>
                            <button className="btn-menu">●●●</button>
                        </div>
                        <div className="card-body">
                            <img className="lazyload" data-src={data.picture.large} alt={data.name.first} />
                            <div>
                                <b>Name</b><br />
                                <strong>{`${data.name.first} ${data.name.last}`}</strong><br />

                                <b>Telephone</b><br />
                                <strong>{data.phone}</strong><br />

                                <div className="hide-mobile">
                                    <b>Birthday</b><br />
                                    <strong>{this.convertDate(data.dob.date)}</strong><br />

                                    <b>Email Address</b><br />
                                    <strong>{data.email}</strong><br />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default PersonnelList;