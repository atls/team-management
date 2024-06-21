import fs from 'fs'

// TODO add to gitignore
// TODO add to env checks
// TODO app-launch-checks

// куда лучше убрать этот файл? положил бы прямо сюда, не монимаю как организовать импорты
export const getGithubPrivateKey = async () => {
  const PRIVATE_KEY_FILEPATH = './src/.github-private-key.pem'
  const GH_APP_PRIVATE_KEY = await fs.promises.readFile(PRIVATE_KEY_FILEPATH, {
    encoding: 'utf8',
  })
  return GH_APP_PRIVATE_KEY
}
