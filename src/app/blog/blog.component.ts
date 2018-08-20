import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  private blogs: Array<object> = [];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
      this.getBlogs();
  }

  public getBlogs(){
      this.blogService.getBlogs().subscribe((data: Array<object>) => {
          this.blogs = data;
          console.log(data);
      });
  }
  
  createBlog(){
    var blog  = {
      user:  "user",
      entry:  "messege",
      };
    this.blogService.createBlog(blog).subscribe((response) => {
        this.getBlogs();
        console.log(response);
    });
  };
  
  deleteBlog(blog){
    this.blogService.deleteBlog(blog.id).subscribe((response) => {
      this.getBlogs();
      console.log(response);
    });
  };

}