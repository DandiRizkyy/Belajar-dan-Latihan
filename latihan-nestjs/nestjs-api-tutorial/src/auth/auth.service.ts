import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup(){
        return {msg: "Hello i have signup"}
    }
    signin(){
        return {msg: "Hello i have signin"}
    }
    
}