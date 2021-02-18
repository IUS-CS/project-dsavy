import React from 'react';

const Card = props => {
    return(
        <div className="card text-center rounded-lg shadow">
            <div className="overflow-hidden">
                <a href={props.page}><img src={props.image} alt="data-structure-img" className="card-img-top"/></a>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text text-secondary">
                    {props.description}
                </p>
                <a href="/linkedlist" className="btn btn-outline-dark">Play</a>
            </div>
        </div>
    )
}

export default Card