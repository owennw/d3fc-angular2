/// <reference path="./typings/node/node.d.ts" />

import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import * as fc from 'd3fc'; // Doesn't compile: Cannot find module 'd3fc'
const d3fc = require('d3fc'); // Compiles but runtime error

@Component({
    selector: 'hello-app',
    template: `
        <h1>{{title}}</h1>
        <ul>
            <li *ng-for="#framework of frameworks">
                {{framework}}
            </li>
        </ul>
    `,
    directives: [CORE_DIRECTIVES]
})

export class HelloApp {
    public title: string = 'Hello World!';
    public frameworks: string[] = ['Angular2', 'React'];
}

bootstrap(HelloApp);
