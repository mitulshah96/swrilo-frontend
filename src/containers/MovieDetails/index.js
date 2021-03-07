import React, { useState, useEffect } from 'react';
import { getMovieDetails } from './action';
import environments from '../../environments';

function MovieDetails(props) {
    const [details, setDetails] = useState({
        data: {},
        loading: false,
    });

    async function fetchMovieDetails() {
        try {
            setDetails({
                ...details,
                loading: true,
            });

            const data = await getMovieDetails({
                id: props?.location?.state,
            });
            setDetails({
                ...details,
                loading: false,
                data: data.data.data.movie.result,
            });
        } catch (error) {
            console.log(error);
            setDetails({
                ...details,
                loading: false,
            });
        }
    }

    useEffect(() => {
        fetchMovieDetails();
        // eslint-disable-next-line
    }, [props?.location?.state]);
    return (
        <>
            {Object.keys(details.data).length > 0 ? (
                <div className="card mb-9">
                    <div className="row no-gutters">
                        <div className="col-md-4 p-4 ">
                            <img
                                src={`${environments.ASSET_URL}/t/p/w185/${details.data.poster_path}`}
                                className="card-img"
                                alt={details.data.title}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-4">
                                <div className="row">
                                    <div>
                                        <h5>Title :</h5>
                                    </div>
                                    <div className="col">
                                        <p>{details.data.title}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <h5>Release Date :</h5>
                                    </div>
                                    <div className="col">
                                        <p>{details.data.release_date}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div>
                                        <h5>Over View :</h5>
                                    </div>
                                    <div className="col">
                                        <p>{details.data.overview}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div>
                                        <h5>Language :</h5>
                                    </div>
                                    <div className="col">
                                        <p>{details.data.original_language}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div>
                                        <h5>Imdb Rating :</h5>
                                    </div>
                                    <div className="col">
                                        <p>{details.data.vote_average}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div>
                                        <h5>Imdb Votes :</h5>
                                    </div>
                                    <div className="col">
                                        <p>{details.data.vote_count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {details.loading && (
                        <div className="row">
                            <div
                                className="spinner-grow text-primary text-center"
                                role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                    Movie Details Not Available
                </>
            )}
        </>
    );
}

export default MovieDetails;
