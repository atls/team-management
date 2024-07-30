// import { getDiscordServerMembersHandle as GET } from '@app/get-discord-server-members-api'
//
// export { GET }

import { Client }            from 'discord.js'
import { Events }            from 'discord.js'
import { GatewayIntentBits } from 'discord.js'
import { Partials }          from 'discord.js'

export const GET = async () => {
  const API_TOKEN = process.env.NEXT_PUBLIC_DISCORD_API_TOKEN as string
  const GUILD_ID = process.env.NEXT_PUBLIC_DISCORD_GUILD_ID as string

  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
    partials: [Partials.GuildMember],
  })

  client.once('ready', async () => {
    console.log(`Мы вошли как ${client.user?.tag}`)

    console.log(GUILD_ID)
    const guildId = Number(GUILD_ID)

    const guild = await client.guilds.fetch(guildId)
    console.log(guild)
    if (guild) {
      const members = await guild.members.fetch()
      console.log(`На сервере ${guild.name} ${members.size} участников:`)
      members.forEach((member) => {
        console.log(`${member.user.tag}`)
      })
    }

    client.destroy()
  })

  client.login(API_TOKEN)

  return new Response('blaaa')
}
