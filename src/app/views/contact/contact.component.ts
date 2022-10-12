import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/clases/user';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  public user: User
  constructor(
    private contactService: ContactService,
    private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  public submit(): void {
    this.contactService.login(this.user).subscribe(
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
