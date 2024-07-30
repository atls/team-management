// export const getFigmaTeamCollaborators = async (teamId) => {
//   const requestUrl = new URL(`https://api.figma.com/v1/teams/${teamId}/projects`)
//   const response = await fetch(requestUrl.href, {
//     headers: {
//       'X-Figma-Token': figmaAccessToken,
//     },
//   })
//   const responseData = await response.json()
//   console.log(responseData)
//   return responseData
//   // TODO должны приходить collaborators
// }
