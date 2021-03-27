import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<nav class="navbar navbar-expand-lg bg-light navbar-light">
  <a class="navbar-brand" href="#">Dollar Bank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#" routerLink="/credit" routerLinkActive="active">CREDIT</a>
      <a class="nav-item nav-link" href="#" routerLink="/debit" routerLinkActive="active">DEBIT</a>
      <a class="nav-item nav-link" href="#" routerLink="/checkBalance" routerLinkActive="active">CHECK BALANCE</a>
      <a class="nav-item nav-link" href="#" routerLink="/checkStatement" routerLinkActive="active">STATEMENT</a>
      <a class="nav-item nav-link" href="#" routerLink="/transaction" routerLinkActive="active">TRANSACTION</a>
    </div>
  </div>
</nav>`
})
export class HeaderComponent {
  
}
