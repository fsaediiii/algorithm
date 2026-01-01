class ParenthesesValidator {
  private stack: string[] = [];

  constructor() {
    this.stack = [];
  }

  public validate(value: string): boolean {
    this.stack = [];
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (char === "(") this.stack.push(char);
      else if (char === ")") {
        if (this.stack.length === 0) return false;
        this.stack.pop();
      }
    }
    return this.stack.length === 0;
  }

  public validateAllBrackets(value: string): boolean {
    this.stack = [];
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (char === "(") this.stack.push("(");
      else if (char === "[") this.stack.push("[");
      else if (char === "{") this.stack.push("{");
      else if (char === ")") {
        if (this.stack.length === 0 || this.stack.pop() !== "(") return false;
      } else if (char === "]") {
        if (this.stack.length === 0 || this.stack.pop() !== "[") return false;
      } else if (char === "}") {
        if (this.stack.length === 0 || this.stack.pop() !== "{") return false;
      }
    }
    return this.stack.length === 0;
  }
}
