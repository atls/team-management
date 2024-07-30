import { Client }            from 'discord.js'
import { GatewayIntentBits } from 'discord.js'
import { Partials }          from 'discord.js'

export const getDiscordServerMembers = async () => {
  const API_TOKEN = process.env.NEXT_PUBLIC_DISCORD_API_TOKEN as string
  const GUILD_ID = process.env.NEXT_PUBLIC_DISCORD_GUILD_ID as string

  console.log(API_TOKEN)
  console.log(GUILD_ID)

  console.log(Client)

  // const client = new Client({
  //   intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
  //   partials: [Partials.GuildMember],
  // })

  console.log(client)

  // client.once('ready', async () => {
  //   console.log(`Мы вошли как ${client.user?.tag}`)
  //
  //   const guild = await client.guilds.fetch(GUILD_ID)
  //   if (guild) {
  //     const members = await guild.members.fetch()
  //     console.log(`На сервере ${guild.name} ${members.size} участников:`)
  //     members.forEach((member) => {
  //       console.log(`${member.user.tag}`)
  //     })
  //   }
  //
  //   client.destroy()
  // })
  //
  // client.login(API_TOKEN)
}
