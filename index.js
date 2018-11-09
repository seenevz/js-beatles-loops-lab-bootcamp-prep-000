
function theBeatlesPlay (musicians, instruments) {
  var beatles = []

  for(var i = 0, l = musicians.length; i < l; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i])
  }

  return beatles
}

function johnLennonFacts (facts) {
  var i = 0
  var l = facts.lenght
  var newFacts = []

  while (i < l ) {
  newFacts.push(facts[i] + " !!!")
  i++
  }

  return facts

}
