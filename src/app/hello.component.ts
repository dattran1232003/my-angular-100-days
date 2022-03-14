import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'hello',
    template: `<p>Hello {{ name }}!</p>`,
    styles: [``],
})
export class HelloComponent implements OnInit {
    @Input()
    name: string = ''

    ngOnInit(): void {
        console.log('Hello Component Init')
    }
}
