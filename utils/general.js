import { SchemaFieldTypes } from 'redis'

export const generalExample = async (client) => {
  try {
    await client.ft.create(
      'idx:classes',
      {
        '$.name': {
          type: SchemaFieldTypes.TEXT,
          SORTABLE: true,
        },
        '$.description': {
          type: SchemaFieldTypes.TEXT,
          AS: 'description',
        },
        '$.total': {
          type: SchemaFieldTypes.NUMERIC,
          AS: 'total',
        },
      },
      {
        ON: 'JSON',
        PREFIX: 'class',
      }
    )
  } catch (e) {
    if (e.message === 'Index already exists') {
      console.log('Index exists already, skipped creation.')
    } else {
      // Something went wrong, perhaps RediSearch isn't installed...
      console.error(e)
      process.exit(1)
    }
  }

  await Promise.all([
    client.json.set('class:1', '$', {
      name: 'Lớp 6A',
      description: 'Học giỏi',
      total: 32,
    }),
    client.json.set('class:2', '$', {
      name: 'Lớp 6B',
      description: 'Văn nghệ',
      total: 40,
    }),
    client.json.set('class:3', '$', {
      name: 'Lớp 6C',
      description: 'Nghịch ngợm',
      total: 26,
    }),
    client.json.set('class:4', '$', {
      name: 'Lớp 6D',
      description: 'Thể thao',
      total: 35,
    }),
  ])

  let result = await client.ft.search('idx:classes', 'Lớp @total:[20 35]', {
    RETURN: ['$.name', 'total'],
  })
  console.log(JSON.stringify(result, null, 2))
}
