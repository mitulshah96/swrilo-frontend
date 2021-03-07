import Axios from 'axios';
import environments from '../../environments';

export function getMovieDetails({ id = 12345 }) {
    return Axios.post(`${environments.BASE_URL}/graphql`, {
        query: ` 
        query($id:Int!){
            movie(id: $id) {
                access_count
                search_count
                result{
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
            }}`,
        variables: {
            id: id,
        },
    });
}
