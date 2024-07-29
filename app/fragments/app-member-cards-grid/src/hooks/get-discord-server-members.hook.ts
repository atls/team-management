import { Client }            from 'discord.js'
import { GatewayIntentBits } from 'discord.js'
import { Partials }          from 'discord.js'

export const getDiscordServerMembers = async () => {
  // Вставьте сюда ваш токен
  // TODO to envs
  const TOKEN = 'e8f2de5b4f11678f64b1febf48cd3af0f2c341d745e7fa4713f30664524f5d24'
  // Вставьте сюда ID вашего сервера
  const GUILD_ID = '293555502728871936'

  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
    partials: [Partials.GuildMember],
  })

  client.once('ready', async () => {
    console.log(`Мы вошли как ${client.user?.tag}`)

    const guild = await client.guilds.fetch(GUILD_ID)
    if (guild) {
      const members = await guild.members.fetch()
      console.log(`На сервере ${guild.name} ${members.size} участников:`)
      members.forEach((member) => {
        console.log(`${member.user.tag}`)
      })
    }

    client.destroy()
  })

  client.login(TOKEN)
}
