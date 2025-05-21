import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Blog } from 'src/app/common/models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogRef: AngularFireList<any>;
  blogs$: Observable<Blog[]>;

  constructor(private dataBase: AngularFireDatabase) {
    this.blogRef = this.dataBase.list('blogs');
    this.blogs$ = this.blogRef.valueChanges();
  }

  addBlog(blog: Blog) {
    const key = this.blogRef.push(blog).key;
    if (key) {
      blog.key = key;
    }
    return this.blogRef.update(`/${key}`, blog)
  }

  getBlog(key: string | undefined): Observable<Blog | undefined> {
    return this.blogs$.pipe(
      map((blogs) => {
        return blogs.find((b) => b.key === key);
      })
    );
  }

  getBlogByName(name: string): Observable<Blog | undefined> {
    return this.blogs$.pipe(
      map((blogs) => {
        return blogs.find((b) => {
          return b.title.toLowerCase() === name;
        });
      })
    )
  }

  getAllBlogs(): Observable<Blog[]> {
    return this.blogs$
  }

  updateBlog(key: any, data: any) {
    this.blogRef.update(key, data)
  }

  removeBlog(id: any) {
    this.blogRef.remove(id)
  }
}
