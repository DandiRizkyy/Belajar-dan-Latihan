import * as crypto from 'crypto';
import { buffer } from 'stream/consumers';

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    // The standard secure default length for RSA keys is 2048 bits
    modulusLength: 2048,
    });

    const encrypt = ((message: string): string =>{
        const buffer:Buffer = crypto.publicEncrypt({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        }, Buffer.from(message))

        return buffer.toString('base64');
    });

    const decrypt = ((message: string): string => {
        const buffer:Buffer =  crypto.privateDecrypt({
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        }, Buffer.from(message, 'base64'))

        return buffer.toString('utf-8')
    });

    const message: 'revoutest' = 'revoutest';
    console.log(message);

    const encrypted: string = encrypt(message);
    console.log(encrypted);

    const decrypted: string =  decrypt(encrypted);
    console.log(decrypted);

    const sign = ((message: string) => {
        const buffer: Buffer = crypto.sign('sha256', Buffer.from(message), {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        });

        return buffer.toString('base64');
    })

const signature: string = sign(message);
console.log(`Input: ${message} 
    
output: ${signature}`);

const verify = ((message: string, signature: string): boolean => {
    return crypto.verify('sha256', Buffer.from(message),{
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,

        },
        Buffer.from(signature, 'base64')
    );
});

const verified: boolean = verify(message, signature);
console.log(`Input dari: ${message} adalah ${verified}`);

const messagePalsu:'INI PALSU' = 'INI PALSU';
console.log(`input dari ${messagePalsu} adalah ${verify(messagePalsu,signature)}`);