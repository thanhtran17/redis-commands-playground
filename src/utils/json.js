const numIncrByCommand = async (client, key, path, num = 1) => {
  try {
    const res = await client.json.numIncrBy(key, path, num)
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

export const redisJSONCommand = { numIncrByCommand }
