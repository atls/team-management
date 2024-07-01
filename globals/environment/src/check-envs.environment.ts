import { REQUIRED_ENV_VAR_NAMES } from './check-envs.constants.js'

const getEnvErrorMessage = (envVar) => {
  return `need "${envVar}" env variable`
}

export const checkEnvs = () => {
  for (const ENV_VAR_NAME of REQUIRED_ENV_VAR_NAMES) {
    if (!process.env[ENV_VAR_NAME]) throw new Error(getEnvErrorMessage('NEXT_PUBLIC_GH_CLIENT_ID'))
  }
}
