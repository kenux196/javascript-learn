function echo(message: string): string {
  console.log(message);
  return message;
}
const funcEcho = echo;
console.log(funcEcho('test'));
type FuncEcho = (message: string) => string;
const funcEcho2: FuncEcho = echo;
console.log(typeof funcEcho2);
