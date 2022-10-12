import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/clases/user';
import { SingInService } from 'src/app/shared/services/sing-in.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  public user: User
  constructor(
    private singInService: SingInService,
    private router: Router) {
    this.user = new User();
  }
  ngOnInit(): void {
  }
  public submit(): void {
    this.singInService.login(this.user).subscribe(
      (data: number) => {
        localStorage.setItem('userName', this.user.name);
        localStorage.setItem('userSurname', this.user.surname);
        localStorage.setItem('personalToken', `${data}`);

        this.router.navigate(['/menu']).then(() => { window.location.reload(); });
      },
      (error: Error) => {
        console.error("Error al realizar el acceso- login");
      }
    )
  }
}
