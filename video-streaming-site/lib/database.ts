import sql from 'better-sqlite3';

const db = new sql('database.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name TEXT, 
      email TEXT UNIQUE,
      password TEXT,
      isVerified BOOLEAN DEFAULT 0

    )`);
  db.exec(`
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      video_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      description TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);
  db.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      id INTEGER,
      user_id INTEGER, 
      video_id INTEGER, 
      like BOOLEAN,
      PRIMARY KEY(user_id, video_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(video_id) REFERENCES videos(id) ON DELETE CASCADE
    )`);
  
    db.exec(`
      CREATE TABLE IF NOT EXISTS comments (
        id INTEGER,
        user_id INTEGER, 
        video_id INTEGER, 
        comment TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(user_id, video_id),
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
        FOREIGN KEY(video_id) REFERENCES videos(id) ON DELETE CASCADE
      )`);

  // Creating two dummy users if they don't exist already
  const stmt:any = db.prepare('SELECT COUNT(*) AS count FROM users');

  if (stmt &&  stmt.get().count === 0) {
    db.exec(`
    INSERT INTO users (name, password, email)
    VALUES ('John', '123456', 'john@example.com')
  `);

    db.exec(`
    INSERT INTO users (name, password, email)
    VALUES ('Max', '123456', 'max@example.com')
  `);
  }
  console.log(db.prepare('SELECT * FROM users').get());
  
}

initDb();

export default db;