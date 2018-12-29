module.exports = app => {
    const { router, controller } = app;
    router.get('/admin/api/user/list', controller.user.list);
}