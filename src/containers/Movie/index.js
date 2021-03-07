import React, { useState, useEffect, useReducer } from 'react';
import { MovieList } from '../../components';
import Header from '../Header';
import { getMovieList } from './action';
import {
    GET_MOVIES_LIST_REQUEST,
    GET_MOVIES_LIST,
    GET_MOVIES_LIST_FAILURE,
} from './constant';
import { reducer, initialState } from './reducer';

function Movie() {
    const [value, setValue] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    function handelChange(value) {
        setValue(value);
    }

    async function fetchMovie() {
        try {
            dispatch({
                type: GET_MOVIES_LIST_REQUEST,
            });

            const data = await getMovieList({ value });
            dispatch({
                type: GET_MOVIES_LIST,
                data,
            });
        } catch (error) {
            dispatch({
                type: GET_MOVIES_LIST_FAILURE,
            });
        }
    }

    const Loading = () => (
        <div className="row">
            <div
                className="spinner-grow text-primary text-center"
                role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );

    useEffect(() => {
        fetchMovie();
        // eslint-disable-next-line
    }, [value]);

    return (
        <>
            <Header handelChangeValue={handelChange} />
            <div className="container-fluid">
                <h1 className="text-white text-center">Movies List</h1>
                <div className="row" style={{ height: '20%' }}>
                    {state.isLoading ? (
                        <Loading />
                    ) : state.data ? (
                        state.data.map((movie) => (
                            <MovieList
                                key={movie.id}
                                id={movie.id}
                                movie={movie}
                            />
                        ))
                    ) : (
                        <div className="container-fluid  align-center">
                            <p className="text-white tect-center p-4">
                                {' '}
                                No Movies found
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Movie;
