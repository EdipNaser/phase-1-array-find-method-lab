// code your solution here
function superbowlWin(record) {
    const a= record.find(findsWins)
    return a===undefined?undefined:a.year
  }
  
  function findsWins(record) {
      if (record.result === "W") {
        return record
      }
      else {
        return undefined
      }
  }
  
  
  
  console.log(superbowlWin(record))
