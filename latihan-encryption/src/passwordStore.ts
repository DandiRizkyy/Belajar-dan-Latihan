import * as bcrypt from 'bcrypt';

const hash = (password: string): string => {
    return bcrypt.hashSync(password, 10);
}

const password: 'halo123' = 'halo123';
const passwordPalsu: 'duar123'= 'duar123';
console.log(password);

const hashedPassword =  hash(password)
console.log(hashedPassword);

const check = (password: string, hashedPassword: string): boolean => {
    return bcrypt.compareSync(password, hashedPassword);
}

console.log(check(password, hashedPassword));
console.log(check(passwordPalsu, hashedPassword));