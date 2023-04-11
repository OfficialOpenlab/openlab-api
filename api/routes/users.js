module.exports = app => {
  const controller = app.controllers.users;
  app.route('/api/users')
    .get(controller.listUsers);
  app.route('/api/insertUser')
    .post(controller.insertUser);
}