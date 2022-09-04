import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { commonApi } from "../shared/api-url";
import { Post } from "../shared/shared.model";

@Injectable()
export class PostsService {
  triggerFetchPosts: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    let postData: Post = { title, content };
    return this.http.post<{ name: string }>(commonApi.postUrl, { ...postData });
  }

  fetchPosts() {
    // new HttpParams().set('print', 'pretty').set('fname','vishal')
    let params = new HttpParams();
    params = params.append('print', 'pretty');
    params = params.append('fname', 'vishal');

    return this.http.get<{ [key: string]: Post }>(commonApi.postUrl, {
      headers: new HttpHeaders({
        'Custom-Header': 'Vishal',
      }),
      params: params,
      observe: 'body' // it can be response where we will recieve complete response object with response headers, status code etc..
    })
      .pipe(map(posts => {
        let postsArr: Post[] = [];
        for (let key in posts) {
          // posts should have key as its own property and not a prototype
          if (posts.hasOwnProperty(key)) {
            postsArr.push({ ...posts[key], id: key });
          }
        }
        return postsArr;
      }),
      catchError(err => {
        console.log(err);
        // send analytics to server for generic tasks
        return throwError(err);
      }));
  }

  deletePost() {
    this.http.delete(commonApi.postUrl, {
      observe: 'events',
      responseType: 'text' // body will come as text, it won't work with get request as response should be in JSON format there,
                           //we saw so many empty lines because whole object was taken in case of type response
    }).pipe(tap(event => {

      if(event?.type === HttpEventType.Sent) {
        console.log('request sent');
      }

      if(event?.type === HttpEventType.Response) {
        console.log(event.body);
      }

    })).subscribe(_ => this.triggerFetchPosts.next(true));
  }
}
