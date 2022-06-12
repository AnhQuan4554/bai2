var input =  [60, 40, 55, 75, 64]
var team1 = 0;
var team2 = 0;
var outPut = [];
input.forEach((iteam,index)=>{
    if(index %  2 == 0 ) team1 +=iteam
    else team2+=iteam;
})
outPut.push(team1)
outPut.push(team2)
console.log(outPut)