class StringReverser {
  reverseWithStack(value: string): string {
    const stack: string[] = [];
    let reversed = "";

    for (let i = 0; i < value.length; i++) {
      stack.push(value[i]);
    }

    for (let i = stack.length - 1; i >= 0; i--) {
      reversed += stack[i];
    }

    return reversed;
  }
}
