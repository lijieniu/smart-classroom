module.exports = app => {
    const { router, controller } = app;
    router.resources('user', '/admin/api/users', controller.user);
    router.post('/user/login', controller.user.login);
    router.post('/user/register', controller.user.register);
}