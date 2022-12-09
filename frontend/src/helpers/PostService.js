import axios from "axios";

const url = "http://localhost:5000/api/posts";

class PostService {
  // Create Posts
  static insertPost(name, email, message) {
    return axios.post(url, {
      name: name,
      email: email,
      message: message,
    });
  }
}

export default PostService;
