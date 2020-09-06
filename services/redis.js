const redis = require('redis')
const client = redis.createClient(6379,'localhost');

const handleRedis = () => {
    let fun = (...args) => {
        let redisTool = {}
        redisTool.set = () => {
            client.set(args[0], args[1], (err, v) => {
                console.log(v)
            })
        }
        redisTool.get = () => {
            client.get(args[0], (err, v) => {
                console.log(v)
            })
        }
        return redisTool
    }
    return fun
}

module.exports = handleRedis
