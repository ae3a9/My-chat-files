class GetSite {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const sql = `
    CREATE TABLE IF NOT EXISTS site (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
	  banner VARCHAR(255),
	  host VARCHAR(255),
	  ids INTEGER,
      logo VARCHAR(255))`;
        return this.dao.run(sql);
    }

    create(data) {
        return this.dao.run(
            'INSERT INTO site (banner,host,ids,logo) VALUES (?,?,?,?)',
            ['banner.png',data.host,data.ids,'logo.png']);
    }

updateBannerLogo(data) {
        if (data) {
			if(data.state == 'banner'){
            return this.dao.run(`UPDATE site SET banner = ? WHERE id = ?`, [data.img,data.id]);
		}else if(data.state == 'logo'){
            return this.dao.run(`UPDATE site SET logo = ? WHERE id = ?`, [data.img,data.id]);
        };
    };
};	

    delete(id) {
        return this.dao.run(
                `DELETE FROM site WHERE ids = ?`,
            [id]
        )
    }
	
	getById(id) {
        return this.dao.get(
                `SELECT * FROM site WHERE ids = ?`,
            [id])
    };
	
    getAll() {
        return this.dao.all(`SELECT * FROM site`);
    }
}

module.exports = GetSite;
