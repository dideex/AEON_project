import ci from './ci.json'
import dev from './dev.json'
import production from './prod.json'
import test from './test.json'

export default { dev, production, test, ci }[process.env.NODE_ENV] || dev
