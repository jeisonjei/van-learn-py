import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
/**
 * This is just TypeScript (JavaScript class)
 */
export class App { 
  protected readonly title = signal('day31');
  /**
   * This is just class field (property)
   */
  counter = 0;

  /**
   * This is method - remember that functions in classes called `methods`?
   */
  handleClick(){
    let value = this.counter+1;
    this.counter = value;
  }
}
