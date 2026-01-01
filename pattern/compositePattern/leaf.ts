import { UIComponent } from "./component";

export class TextBuilder extends UIComponent {
  constructor(
    private name: string,
    private color: string = "black",
    private fontSize: number = 16,
  ) {
    super();
  }

  render(level: number = 0): string {
    return `${"  ".repeat(level)}Text: ${this.name} [color: ${this.color}, fontSize: ${this.fontSize}]`;
  }
}

export class ImageBuilder extends UIComponent {
  constructor(
    private name: string,
    private width: number = 100,
    private height: number = 100,
  ) {
    super();
  }

  render(level: number = 0): string {
    return `${"  ".repeat(level)}Image: ${this.name} [${this.width}x${this.height}]`;
  }
}

export class ButtonBuilder extends UIComponent {
  constructor(
    private name: string,
    private color: string = "blue",
    private size: string = "medium",
  ) {
    super();
  }

  render(level: number = 0): string {
    return `${"  ".repeat(level)}Button: ${this.name} [color: ${this.color}, size: ${this.size}]`;
  }
}
