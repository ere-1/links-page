class Post {
  id: number;
  title: string;
  body: string;
  constructor(title: string, body: string) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
  }
}

export default Post;
