
export default (playlistResponse) => {
  let array = []
  let parsed = JSON.parse(playlistResponse)
  let playlistObject = parsed.result.map((data) => {
    return({
      name: data.name,
      uri: data.uri
    })
  })

  let resultLoc = playlistResponse.search("result")
  let playlistString = playlistResponse.substring(resultLoc, playlistResponse.length)
  
  //return JSON.stringify(parsed.result)
  return JSON.stringify(playlistObject)
  //return playlistObject
  //return playlistResponse
}