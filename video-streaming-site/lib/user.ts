import db from "./database";

export function getAllUser(){
    const data  = db.prepare('SELECT * FROM users').all();
    return data;
}

export function insertUser(user:UserType){
    const stmt = db.prepare(`
        INSERT INTO users(name, email, password)
        VALUES(?, ?, ?)`);
        return stmt.run(user.name, user.email, user.password);
}
export function getUser(email:string){
    const stmt =db.prepare(`SELECT * FROM users WHERE email = ?`)
    return stmt.get(email);
}

export function userVerificationStaus(user:UserType){
    const stmt =db.prepare(`UPDATE users SET isVerified = 1 WHERE email = ?`)
    return stmt.run(user.email);
}