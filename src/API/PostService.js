import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}