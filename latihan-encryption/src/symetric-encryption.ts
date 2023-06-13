import * as crypto from 'crypto';
import * as dotenv from 'dotenv';

dotenv.config()

const ENC_KEY: string  = process.env.ENC_KEY || '';
const IV: string  = process.env.IV || '';

// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');
// Hexadecimal = 0123456789ABCDEF

const encrypt = ((message: string): string =>{
    const cipher: crypto.Cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
    let encrypted: string = cipher.update(message, 'utf-8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
})

const decrypt = ((encrypted: string): string => {
    const decipher: crypto.Decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
    let decrypted: string = decipher.update(encrypted, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
})

const message: 'testing' = 'testing';
console.log(message);

const encrypted = encrypt(message);
console.log(encrypted);

const decrypted = decrypt(encrypted);
console.log(decrypted)

