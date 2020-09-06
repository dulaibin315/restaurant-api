const Router = require('koa-router')
const router = new Router()
const redis = require('../services/redis')()

const handleRouter = () => {
    router
        .get('/login', ctx => {
            console.log(ctx.session)
            console.log('登录')
        })
        .get('/home', ctx => {
            let Redis = redis('test1','hello,world!')
            Redis.set()
            Redis.get()
            // console.log(Redis)
            ctx.body = '首页'
        })
    return router
}

module.exports = handleRouter
