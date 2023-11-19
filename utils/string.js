const appendCommand = async (client) => {
  try {
    await Promise.all([client.APPEND('bike:1', 'test')])
  } catch (e) {
    console.log(e)
  }
}

const decrCommand = async (client) => {
  try {
    const res = await client.DECR('string_decr')
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

const decrbyCommand = async (client, byNum) => {
  try {
    const res = await client.DECRBY('string_decr', byNum)
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

const getDelCommand = async (client) => {
  try {
    const res = await client.GETDEL('string_decr1')
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

// Hàm này sử dụng chung với hàm set, sau khi set sẽ get luôn với timestamp, hết timestamp sẽ tự động xoá trong db luôn
const getExCommand = async (client) => {
  try {
    const res = await client.GETEX('bike:1', 'EX', 60)
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

export const redisStringCommands = {
  appendCommand,
  decrCommand,
  decrbyCommand,
  getDelCommand,
  getExCommand,
}
