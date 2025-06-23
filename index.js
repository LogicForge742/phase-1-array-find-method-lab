// code your solution here
function superbowlWin(records){
  // Use find() to locate the first object with result "W"
  const winRecord = records.find(record => record.result === "W");

  // If a winning record is found, return its year; otherwise, return undefined
  return winRecord ? winRecord.year : undefined;
}

