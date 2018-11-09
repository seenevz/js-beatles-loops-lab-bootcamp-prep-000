

function theBeatlesPlay (musicians, instruments) {
  var beatles = []

  for (musicians[0];; musicians++) {
    beatles.push(musicians+instruments)
  }
  return beatles
}
