export const getHtml = (invites: Array<string>): string => {
  const inviteUrls = invites.map((invite) => `<a href="${invite}">${invite}</a>`)
  const invitesString = `${inviteUrls.join('<br>')}`

  const htmlOutput = `${invitesString}`

  return htmlOutput
}
