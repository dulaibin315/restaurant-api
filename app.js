const Koa = require('koa')
const app = new Koa()
const router = require('./router/router')()

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

const session = require('koa-session');


const CONFIG = {
    key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 3000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: true, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));
app.keys = ['some secret hurr'];
app.use(ctx => {
    ctx.session.test = '哈哈'
    console.log(ctx.session)
    ctx.body = '你好'
})

app.listen(3000, () => {
    console.log('port 3000 is running')
})
