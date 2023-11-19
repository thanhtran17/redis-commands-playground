import { createClient } from 'redis'
import { getDelCommand } from './utils/string.js'

const client = await createClient({
  password: 'iKWFYiqX9J9XIHHDjERkmgAB3o8jjsF7',
  socket: {
    host: 'redis-13103.c57.us-east-1-4.ec2.cloud.redislabs.com',
    port: 13103,
  },
})
  .on('error', (err) => console.log('Redis Client Error', err))
  .connect()

await getDelCommand(client)

await client.disconnect()
