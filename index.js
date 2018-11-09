

function theBeatlesPlay (musicians, instruments) {
  var beatles = []

  for(let i = musicians[0];i = musicians.lenght; i = musicians[i++]) {
    beatles.push("${musicians} plays ${instruments}")
  }

  return beatles
}
