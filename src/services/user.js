export function queryCurrentUser() {
  const res = {
    code: 0,
    items: {
      name: 'Zhang Yu',
      email: 'zhangyu.vin@gmail.com',
    },
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(res), 700)
  })
}
