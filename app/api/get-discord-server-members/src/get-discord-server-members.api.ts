import { getDiscordServerMembers } from '@globals/third-party-service-data'

export const getDiscordServerMembersHandle = async (request: Request) => {
  const discordServerMembers = await getDiscordServerMembers()
}
