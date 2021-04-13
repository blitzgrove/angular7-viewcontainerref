import { Component } from '@angular/core';

@Component({
  template: `<div>{{name}}!</div>`,
})
export class HelloComponent  {
  public name = 'Hello Component is here';

  constructor() {
    console.log('HelloComponent generated');
  }
}
