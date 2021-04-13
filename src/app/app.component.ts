import { Component, ViewChild, ComponentFactoryResolver } from "@angular/core";
import { HelloComponent } from "./hello.component";
import { ByeComponent } from "./bye.component";
import { AdDirective } from "./ad.directive";

@Component({
  selector: "my-app",
  template: `
    <button (click)="render('bye-component')">Render Bye component</button>
    <button (click)="render('hello-component')">Render Hello component</button>
    <ng-template ad-host></ng-template>
  `
})
export class AppComponent {
  @ViewChild(AdDirective) adHost: AdDirective;

  public components = {
    "hello-component": HelloComponent,
    "bye-component": ByeComponent
  };
  public currentComponent = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public render(component: string): void {
    const currentComponent = this.components[component];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      currentComponent as any
    );

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
