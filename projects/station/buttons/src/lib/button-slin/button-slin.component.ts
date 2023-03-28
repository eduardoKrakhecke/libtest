import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-button-slin',
  templateUrl: './button-slin.component.html',
  styleUrls: ['./button-slin.component.scss']
})
export class ButtonSlinComponent {

  public buttonText = '';

  @Input()
  set text(name: string) {
    this.buttonText = name.toUpperCase()
  }
  get name(): string {
    return this.buttonText
  }


}
