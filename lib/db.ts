// simulate orm
export const db = {
  get: async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 10))
    return { id, name: 'John Doe' }
  },
  slowGet: async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return { id, name: 'John Doe' }
  },
  slowGetUsers: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const users = await fetch(
      'https://67c860af0acf98d070864da1.mockapi.io/api/v1/users'
    )
    return users.json() as Promise<
      { id: number; name: string; avatar: string }[]
    >
  },
}
