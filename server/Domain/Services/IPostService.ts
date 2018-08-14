import PostEntity from '../../Data/Entities/PostEntity';

export interface IPostService {
  getPosts(count: string, offset: string): Promise<PostEntity[]>;
  addPost(data: any): Promise<PostEntity>;
  updatePost(data: any): Promise<PostEntity>;
  deletePost(id: number): Promise<PostEntity[]>;
}
