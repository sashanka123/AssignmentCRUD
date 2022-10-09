module.exports = function (app) {
  var userHandlers = require("../controllers/userController.js");
  // todoList Routes
  app.route("/tasks").post(userHandlers.loginRequired,userHandlers.profile);
  app.route("/auth/getall").get(userHandlers.getAll);
  app.route("/auth/register").post(userHandlers.register);
  app.route("/auth/sign_in").post(userHandlers.sign_in);
  app.route("/delete/:id").delete(userHandlers.delete);
  app.route("/update/:id").put(userHandlers.update);
  app.route("/forget-password").post(userHandlers.forget_password);
  app.route("/reset-password").get(userHandlers.reset_password);
  app.route("/ascend-order").get(userHandlers.ascend)
  app.route("/user-data").patch(userHandlers.userdata);
};