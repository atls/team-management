import { GithubServerApp }     from '@github-server-app/utils'
import { getGithubPrivateKey } from '@globals/utils'
import { checkPrivateKey }     from '@globals/utils'
import { checkEnvs }           from '@globals/utils'

import fs                      from 'fs'

export const RootLayoutServer = async () => {
  checkPrivateKey()
  checkEnvs()
  const GH_PIVATE_KEY = await getGithubPrivateKey()
  GithubServerApp.authenticate(GH_PIVATE_KEY)

  // const { data } = await GithubServerApp.app.octokit.request('/app')
  // console.log('authenticated as %s', data.name)

  // for await (const { installation } of GithubServerApp.app.eachInstallation.iterator()) {
  //   console.log(installation)
  // }
}
