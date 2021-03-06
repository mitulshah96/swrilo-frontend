const environments = {
    development: {
        BASE_URL: '',
        ASSET_URL: 'http://image.tmdb.org',
    },
    qa: {
        BASE_URL: '',
    },
    production: {
        BASE_URL: '',
        ASSET_URL: '',
    },
};

export default environments[process.env.REACT_APP_ENV] ||
    environments[Object.keys(environments)[0]];
