import sql from 'better-sqlite3';

const db = new sql('database.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name TEXT, 
      email TEXT UNIQUE,
      password TEXT,
      image TEXT,
      isVerified BOOLEAN DEFAULT 0

    )`);
  db.exec(`
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      video_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      description TEXT NOT NULL, 
      category TEXT NOT NULL,
      count INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);
  db.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      id INTEGER  PRIMARY KEY,
      user_id INTEGER, 
      video_id INTEGER, 
      like BOOLEAN,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(video_id) REFERENCES videos(id) ON DELETE CASCADE
    )`);
  
    db.exec(`
      CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY,
        user_id INTEGER, 
        video_id INTEGER, 
        comment TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
        FOREIGN KEY(video_id) REFERENCES videos(id) ON DELETE CASCADE
      )`);

  // Creating two dummy users if they don't exist already
  const stmt:any = db.prepare('SELECT COUNT(*) AS count FROM users');

  if (stmt &&  stmt.get().count === 0) {
    db.exec(`
    INSERT INTO users (name, password, email,image)
    VALUES ('John', '123456', 'john@example.com','/image/user.png')
  `);

    db.exec(`
    INSERT INTO users (name, password, email,image)
    VALUES ('Max', '123456', 'max@example.com','/image/user.png')
  `);
  }
  
}

initDb();

export default db;
