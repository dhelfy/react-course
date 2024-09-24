import axios from "axios";

export default class PostService {
    static async getAll(limit, page) {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getOne(id) {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    }

    static async getComments(id) {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}