import React, { useState, useEffect } from 'react';
import PersonnelList from '../components/personnel-list';
import ApiRepository from '../../data/api-repository';

const Personnel = () => {

    const [personnel, setPersonnel] = useState([]);
    const [fullPersonnel, setFullPersonnel] = useState([]);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(4);

    useEffect(() => {
        ApiRepository.getAllPersonnel().then((json) => {
            setPersonnel(json.results);
            setFullPersonnel(json.results);
        });
    }, []);

    const onSearch = (e) => {
        setFirstIndex(0);
        setLastIndex(4);

        const searchResult = fullPersonnel.filter((data) => data.name.first.toLowerCase().includes(e.target.value.toLowerCase()));
        setPersonnel(searchResult);

        if (!e.target.value) {
            setPersonnel(fullPersonnel);
        }
    };

    const nextPage = () => {
        setFirstIndex(firstIndex+5);
        setLastIndex(lastIndex+5);
    }

    const previousPage = () => {
        setFirstIndex(firstIndex-5);
        setLastIndex(lastIndex-5);
    }

    return (
        <div className="main">
            <div className="card header">
                <div>
                    <h1>PERSONNEL LIST</h1>
                    <h2>List of all personnels</h2>
                </div>

                <div className="flex-large">
                    <div>
                        <i className="fa fa-search search-icon"></i>
                        <input type="text" onChange={onSearch} placeholder="Find Personnels" />
                    </div>
                    <button className="btn-primary">ADD PERSONNEL <i className="fa fa-plus float-right"></i></button>
                </div>
            </div>

            <PersonnelList personnels={personnel.slice(firstIndex, lastIndex)} />
            {personnel.length === 0 ? (<p className="not-found">Personnel Not Found</p>) : null}

            <div className="pagination">
                <button onClick={previousPage} disabled={firstIndex === 0}><i className="arrow left"></i> Previous Page</button>
                <button onClick={nextPage} disabled={lastIndex >= personnel.length}>Next Page <i className="arrow right"></i></button>
            </div>
        </div>
    )
}

export default Personnel;