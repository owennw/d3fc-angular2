/// <reference path="./typings/node/node.d.ts" />

import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2';

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
