import { checkEnvs } from '@globals/environment'

export const RootLayoutServer = async (): Promise<void> => {
  checkEnvs()
}
