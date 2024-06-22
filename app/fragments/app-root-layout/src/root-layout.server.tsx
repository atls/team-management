import { checkPrivateKey } from '@globals/utils'
import { checkEnvs }       from '@globals/utils'

export const RootLayoutServer = async () => {
  checkPrivateKey()
  checkEnvs()
}
