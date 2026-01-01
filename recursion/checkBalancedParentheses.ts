function checkBalancedParentheses(value: string, sum: number) {
  // if(sum)
  if (sum == 0) return true;
  return false;
}

const value = "((()())()(()))";
console.log(checkBalancedParentheses(value, 0));
