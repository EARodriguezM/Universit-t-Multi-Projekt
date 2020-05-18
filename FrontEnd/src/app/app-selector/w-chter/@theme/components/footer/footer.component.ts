import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    Created with a coffe cup <b>Esteban Rodríguez</b> 2019
    </span>
    <div class="socials">
      <a href="https://github.com/EARodriguezM" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/EstebanA.RodriguezM" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/EARodriguezM96" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/earodriguezmelendez/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
