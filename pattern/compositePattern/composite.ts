import { UIComponent } from "./component";

export class Container extends UIComponent {
  private children: UIComponent[] = [];

  constructor(
    private componentName: string,
    protected props?: Record<string, string | number>,
  ) {
    super();
  }

  addItem(component: UIComponent) {
    this.children.push(component);
  }

  render(level: number = 0): string {
    const result: string[] = [];
    const propsStr = this.props
      ? Object.keys(this.props)
          .map((prop) => `${prop}: ${this.props[prop]}`)
          .join(", ")
      : "";
    result.push(
      `${"  ".repeat(level)}Container: ${this.componentName}${propsStr ? " [" + propsStr + "]" : ""}`,
    );
    this.children.forEach((child) => {
      result.push(child.render(level + 1));
    });
    return result.join("\n");
  }
}
