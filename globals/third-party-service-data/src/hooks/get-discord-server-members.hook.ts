import { Client }            from 'discord.js'
import { GatewayIntentBits } from 'discord.js'
import { Partials }          from 'discord.js'

export const getDiscordServerMembers = async () => {
  const API_TOKEN = process.env.NEXT_PUBLIC_DISCORD_API_TOKEN as string
  const GUILD_ID = process.env.NEXT_PUBLIC_DISCORD_GUILD_ID as string

  const client = new Client({ intents: [GatewayIntentBits.Guilds] })

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })

  client.login(API_TOKEN)

  // console.log(API_TOKEN)
  //
  // const client = new Client({
  //   intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
  //   partials: [Partials.GuildMember],
  // })
  //
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
  // console.log('\n')
  // console.log('after client once')
  // console.log('\n')

  client.login(API_TOKEN)

  console.log('\n')
  console.log('after client login')
  console.log('\n')
}
