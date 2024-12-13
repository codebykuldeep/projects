import { UserType } from "@/helper/commonTypes";
import db from "./database";

export function getAllUser(){
    const data  = db.prepare('SELECT * FROM users').all();
    return data;
}
export function insertUserAll(user:UserType){
    const stmt = db.prepare(`
        INSERT INTO users(id,name, email, password,image,isVerified)
        VALUES(?,?, ?, ?,?,1)`);
        return stmt.run(user.id,user.name, user.email, user.password,user.image);
} 

export function insertUser(user:UserType){
    const stmt = db.prepare(`
        INSERT INTO users(name, email, password,image)
        VALUES(?, ?, ?,?)`);
        return stmt.run(user.name, user.email, user.password,'/image/user.png');
}
export function getUser(email:string){
    const stmt =db.prepare(`SELECT * FROM users WHERE email = ?`)
    return stmt.get(email);
}

export function getUserById(id:string){
    const stmt =db.prepare(`SELECT * FROM users WHERE id = ?`)
    return stmt.get(id);
}

export function userVerificationStaus(user:UserType){
    const stmt =db.prepare(`UPDATE users SET isVerified = 1 WHERE email = ?`)
    return stmt.run(user.email);
}
export function updateWholeUserProfile(user:UserType){
    const stmt =db.prepare(`UPDATE users SET name = ? ,image= ?, isVerified = 1 WHERE email = ?`);
    return stmt.run(user.name,user.image,user.email)
}

export function providerUser(user:UserType){
    try {
        try {
            const userInDB =getUser(user.email)
            if(!userInDB){
                insertUserAll(user);
            }
            updateWholeUserProfile(user);
        } catch (error:any) {
            throw new Error(error.message)
        }
    } catch (error:any) {
        throw new Error(error.message)
    }
}