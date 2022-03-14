import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    users = [
        {
            id: 0,
            name: 'Dat',
            age: 18,
        },
    ]

    handler(): void {
        console.log('clicked')
    }
}
