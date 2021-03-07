import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import environments from '../../environments';

function MovieList({ movie }) {
    const { poster_path, title, id } = movie;
    return (
        <div className="card m-4 " style={{ width: '26%' }}>
            <Link className="p-4" to={{ pathname: '/details', state: id }}>
                <img
                    src={`${environments.ASSET_URL}/t/p/w185/${poster_path}`}
                    className="card-img-top"
                    alt={title}
                />
            </Link>
            <div className="card-body">
                <h5 className="card-title p-2">{title}</h5>
            </div>
        </div>
    );
}

export default MovieList;
