export const getFigmaTeamCollaborators = async (teamId) => {
  const requestUrl = new URL(`https://api.figma.com/v1/teams/${teamId}/projects`)
  const response = await fetch(requestUrl.href, {
    headers: {
      'X-Figma-Token': figmaAccessToken,
    },
  })
  const responseData = await response.json()
  console.log(responseData)
  return responseData
  // TODO должны приходить collaborators
}
//
// const TEAM_ID = '1180582603387288055'
// const teamId = TEAM_ID
// const figmaCollaborators = await getFigmaTeamCollaborators(teamId)
