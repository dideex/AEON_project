/**
 * Получить объект из local storage
 * @param {Название свойства} key
 */
export function read(key: string): string | null {
  try {
    return JSON.parse(localStorage.getItem(key) || '')
  } catch {
    return localStorage.getItem(key)
  }
}

/**
 * Записать объект в local storage
 * @param {Название свойства} key
 * @param {Данные} data
 */
export function write(key: string, data: object | string): void {
  try {
    if (typeof data === 'object') localStorage.setItem(key, JSON.stringify(data))
    else localStorage.setItem(key, data)
  } catch (err) {
    console.error(err)
  }
}

/**
 * Обновить объект в local storage
 * @param {Название свойства} key
 * @param {Данные} data
 */
export function update(key: string, data: object): void {
  const info = read(key) || {}
  if (info) {
    try {
      localStorage.setItem(key, JSON.stringify({ ...info, ...data }))
    } catch {
      console.error('Failed to update local storage: ', key)
    }
  }
}

/**
 * Удалить объект из local storage
 * @param {Название свойства} key
 */
export function remove(key: string): void {
  localStorage.removeItem(key)
}
