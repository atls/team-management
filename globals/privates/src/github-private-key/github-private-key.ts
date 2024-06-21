import fs from 'fs'

// TODO add to gitignore
// TODO add to env checks
// TODO app-launch-checks

// куда лучше убрать этот файл? положил бы прямо сюда, не монимаю как организовать импорты
const privateKeyFilepath = './src/.github-private-key.pem'
export const GH_APP_PRIVATE_KEY = await fs.promises.readFile(privateKeyFilepath, {
  encoding: 'utf8',
})
