import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.nav-bar {font-size:15px;}
        #searchForm {margin-right:100px;}
        @media (max-width:1200px) {#searchForm {display: none;}}
        li > a.active { color : #F97924; }
    `]
})
export class NavBarComponent {

} 