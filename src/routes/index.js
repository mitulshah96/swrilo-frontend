import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Movie, MovieDetails, PageNotFound } from '../containers';

// eslint-disable-next-line
export default () => (
    <>
        <Switch>
            <Route exact path="/" component={Movie} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/details" component={MovieDetails} />
            <Route exact path="*" component={PageNotFound} />
        </Switch>
    </>
);
