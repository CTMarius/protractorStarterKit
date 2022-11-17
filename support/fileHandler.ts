import * as fs from 'fs'

export async function compareTwoJsonFiles(actual: string, expected: string){
    var dataArrayOne = JSON.parse(fs.readFileSync(actual, 'utf-8'))
    var dataArrayTwo = JSON.parse(fs.readFileSync(expected, 'utf-8'))    
    var diff = {};
    for(var i in dataArrayTwo) {
      if(!dataArrayOne.hasOwnProperty(i) || dataArrayTwo[i] !== dataArrayOne[i]) {
        diff[i] = dataArrayTwo[i];
      }
    }    
    console.log(diff)
    return diff;
  }

