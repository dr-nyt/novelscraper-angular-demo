import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    novels: any = [
        {name: 'Tales of Demons and Gods', img: '../assets/img/tldg.jpg'},
        {name: 'Martial God Asura', img: '../assets/img/mga.jpg'},
        {name: 'Solo Leveling', img: '../assets/img/solo-leveling.jpg'}
    ];

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        
    }

    launchAr(event, index) {
        this.router.navigateByUrl('/arview', { state: { id: index} });
    }

}
