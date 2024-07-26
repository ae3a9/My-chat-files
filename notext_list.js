class GetNoText {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const sql = `
    CREATE TABLE IF NOT EXISTS notext (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      type VARCHAR(255),
      path VARCHAR(255),
      v VARCHAR(255))`;
        return this.dao.run(sql);
    }

    create(data) {
        if (data) {
            return this.dao.run("INSERT INTO notext (type,path,v) VALUES (?,?,?)", [data.type, data.path,data.v]);
        }
    }

    delete(id) {
        return this.dao.run(`DELETE FROM notext WHERE id = ?`, [id]);
    }
	
		   deleteall() {
        return this.dao.run(`DELETE FROM notext`)
    }



    getById(id) {
        return this.dao.get(`SELECT * FROM notext WHERE id = ?`, [id]);
    }
	

    getAll() {
        return this.dao.all(`SELECT * FROM notext`);
    }
}

module.exports = GetNoText;
