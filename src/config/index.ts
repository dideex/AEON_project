import ci from './ci'
import development from './dev'
import production from './prod'
import test from './test'

const env = process.env.NODE_ENV || 'development'
export default { development, production, test, ci }[env]
