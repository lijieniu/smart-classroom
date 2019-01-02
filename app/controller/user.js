const Controller = require('egg').Controller;
const crypto = require('crypto');

class UserController extends Controller{
    async index() {
        this.ctx.body = await this.ctx.service.user.getUserList();
    }

    async register() {
        let ctx = this.ctx;
        let _user = ctx.request.body;
        _user.password = crypto.createHash('md5').update(_user.password).digest('hex');
        let result = await this.ctx.service.user.createUser(_user);
        this.ctx.body = result;
    }

    async login() {
        let ctx = this.ctx;
        let userInfo = ctx.request.body;
        let result = await this.ctx.service.user.findUserBySNo(userInfo.student_no);
        if(result.password === crypto.createHash('md5').update(userInfo.password).digest('hex')) {
            this.ctx.body = true;
        } else {
            this.ctx.body = false;
        }
    }
}

module.exports = UserController;