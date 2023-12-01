import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'b7d79ee1e0d04dd580d5dbada0244aff'
    }
})

export interface FetchResponse<T> {
  count: number;
  results: T[];
}