import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'random-card';

  user: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  //this will get loaded first time and also when loading the using page
  ngOnInit() {
    this.userService.getUser().subscribe(
      (user: any) => {
        console.log(user);
        this.user = user.results[0];
      },
      (err) => {
        this.toastr.error(err.status, 'Oops');
      }
    );
  }

  //this will be called if you reload the page using reload button
  onReload() {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.toastr.info('New User Loaded');
        this.user = user.results[0];
        console.log('New User reloaded:' + user.results[0].name?.first);
      },
      (err) => {
        this.toastr.error('Something went wrong');
      }
    );
  }
}
