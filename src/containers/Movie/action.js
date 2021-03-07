import Axios from 'axios';
import environments from '../../environments';

export function getMovieList({ value = '', page = 1 }) {
    return Axios.post(`${environments.BASE_URL}/graphql`, {
        query: `
            query($keyword:String!,$page:Int!) { 
                movies(keyword: $keyword, page: $page){
                    results {
                        original_title
                        poster_path
                        video
                        vote_average
                        overview
                        release_date
                        vote_count
                        adult
                        backdrop_path
                        id
                        title
                        original_language
                        popularity
                        media_type
                        genre_ids
                    }
            keyword_count
        }}`,
        variables: {
            keyword: value,
            page: page,
        },
    });
}
