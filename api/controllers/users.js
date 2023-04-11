module.exports = app => {
  const connectionDB = app.database.connection;
  const controller = {};

  controller.listUsers = (req, res) => {
    connectionDB
      .query('SELECT * FROM users', (err, result) => {
        if (err) {
          throw err;
        };
        res.send(result.rows);
      });
  }

  controller.insertUser = (req, res) => {
    const { name, website, email, contact, activity, number, role } = req.body;
    connectionDB.query(
      `INSERT INTO users VALUES ('${name}', '${website}', '${email}', '${contact}', '${activity}', '${number}', '${role}')`,
      (err) => {
        if (err) throw err
        res.send({ result: 'Tudo certo chefia.' })
      }
    );
  }

  return controller;
}