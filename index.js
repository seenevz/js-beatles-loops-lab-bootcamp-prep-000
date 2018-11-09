

function theBeatlesPlay (musicians, instruments) {
  var beatles = []

  for(var i = 0, l = musicians.length; i < l; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i])
  }

  return beatles
}
