import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../shared/shared.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html',
  styleUrls: ['./httpdemo.component.scss'],
  providers: [PostsService]
})
export class HTTPDemoComponent implements OnInit, OnDestroy {

  loadedPosts = [];
  fetching: boolean = false;
  error: {[key:string]: string } = null;
  subscription: Subscription = new Subscription();
  constructor(private postsSvc: PostsService) { }

  ngOnInit() {
    this.onFetchPosts();

    this.subscription.add(this.postsSvc.triggerFetchPosts.subscribe(fetchPosts => {
      if(fetchPosts) {
        this.onFetchPosts();
      }
    }));

  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsSvc.createAndStorePost(postData?.title, postData?.content).subscribe(response => {
      this.onFetchPosts();
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetching = true;
    this.postsSvc.fetchPosts().subscribe(response => {
      this.fetching = false;
      this.loadedPosts = [...response];
    }, err => {
      this.fetching = false;
      // this err?.error is being sent by Firebase
      this.error = err?.error;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsSvc.deletePost();
  }

  handleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe
  }

}
