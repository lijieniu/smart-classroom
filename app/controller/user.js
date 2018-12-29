const Controller = require('egg').Controller;

class UserController extends Controller{
    async list() {
        this.ctx.body = await this.ctx.service.user.getUserList();
    }
}

module.exports = UserController;