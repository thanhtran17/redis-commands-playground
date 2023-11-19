import { createClient } from 'redis'

const client = await createClient({
  password: 'iKWFYiqX9J9XIHHDjERkmgAB3o8jjsF7',
  socket: {
    host: 'redis-13103.c57.us-east-1-4.ec2.cloud.redislabs.com',
    port: 13103,
  },
})
  .on('error', (err) => console.log('Redis Client Error', err))
  .connect()
const res = await client.INFO()
console.log(res)
await client.disconnect()
