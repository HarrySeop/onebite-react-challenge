const a = true;

switch (typeof a) {
  case 'string':
    console.log('문자열');
    break;
  case 'number':
    console.log('숫자');
    break;
  case 'boolean':
    console.log('불리언');
    break;
  case 'undefined':
    console.log('언디파인');
    break;
  case 'object':
    console.log('객체');
    break;
  case 'function':
    console.log('함수');
    break;
  default:
    console.log('리팩토링 예정');
}
