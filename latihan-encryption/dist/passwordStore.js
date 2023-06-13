import * as bcrypt from 'bcrypt';
const hash = (password) => {
    return bcrypt.hashSync(password, 10);
};
const password = 'halo123';
const passwordPalsu = 'duar123';
console.log(password);
const hashedPassword = hash(password);
console.log(hashedPassword);
const check = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};
console.log(check(password, hashedPassword));
console.log(check(passwordPalsu, hashedPassword));
