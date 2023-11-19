import { createClient } from 'redis'
import { redisJSONCommand } from './src/utils/json.js'

const client = await createClient({
  password: 'iKWFYiqX9J9XIHHDjERkmgAB3o8jjsF7',
  socket: {
    host: 'redis-13103.c57.us-east-1-4.ec2.cloud.redislabs.com',
    port: 13103,
  },
})
  .on('error', (err) => console.log('Redis Client Error', err))
  .connect()

await redisJSONCommand.numIncrByCommand(client, 'cio-digest:sent', '$.today')

await client.disconnect()
