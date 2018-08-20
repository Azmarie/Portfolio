import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  API_URL  =  'http://localhost:9000';
  constructor(private httpClient: HttpClient) {}
  getBlogs(){
      return  this.httpClient.get(`${this.API_URL}/blogs`);
  }
  createBlog(blog){
    return  this.httpClient.post(`${this.API_URL}/blogs/`,blog);
  }
  deleteBlog(id){
    return  this.httpClient.delete(`${this.API_URL}/blogs/${id}`,id);
  }
}