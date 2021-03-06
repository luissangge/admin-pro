import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {


  user: User;

  constructor(public userService: UserService) {
    this.user = userService.usuario;
  }

  ngOnInit(): void {
  }

}
