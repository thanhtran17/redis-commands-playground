export const appendCommand = async (client) => {
  try {
    await Promise.all([client.APPEND('bike:1', 'test')])
  } catch (e) {
    console.log(e)
  }
}

export const decrCommand = async (client) => {
  try {
    const res = await client.DECR('string_decr')
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

export const decrbyCommand = async (client, byNum) => {
  try {
    const res = await client.DECRBY('string_decr', byNum)
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

export const getDelCommand = async (client, byNum) => {
  try {
    const res = await client.DECRBY('string_decr', byNum)
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

export const redisStringCommands = { appendCommand, decrCommand, decrbyCommand }
