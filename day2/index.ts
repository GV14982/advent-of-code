import * as data from './data.json';
interface Password {
  rule: number[] | null,
  char: string | null,
  val: string | null
}

const parsePasswords = (arr: string[]) => {
  return arr.map(s => {
    const password: Password = {
      rule: null,
      char: null,
      val: null
    };
    s.split(" ").forEach((e, i) => {
      switch(i % 3) {
        case 0:
          password.rule = e.split("-").map(n => parseInt(n));
          break;
        case 1:
          password.char = e.replace(':', '');
          break;
        case 2:
          password.val = e;
          break;
        default:
          throw new Error('Something broke parsing the passwords');
      }
    });
    return password;
  });
}

const checkPasswords = (passwords: Password[]) => {
  return passwords.filter(password => {
    const regex = new RegExp(`${password.char}`, 'g');
    const match = password.val.match(regex);
    console.log(match);
    return Array.isArray(match) && match.length >= password.rule[0] && match.length <= password.rule[1];
  }).length;
}
const passwords = checkPasswords(parsePasswords(data))
console.log(passwords);