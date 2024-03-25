import inquirer from  "inquirer"

let round:number=1;
let UserScore:number=0;
let ComputerScore:number=0;
async function NumberGuessGame(){
 while(round<=5){
  let random=Math.ceil(Math.random()*10) 
  let num=Math.random
  const answers=await inquirer.prompt([{
    message:"ENTER A NUMBER {1-10}: ",
    type:"number",
    name:"UserGuess"
 }]);
if(answers.UserGuess==random){
    console.log(`USER WINS round no : ${round}`);
    UserScore++
} 
else{
    console.log(`COMPUTER WINS round no : ${round}`);
    ComputerScore++;
    }
 round++; 
 }
}

await NumberGuessGame();
console.log("USER SCORED : "+UserScore+" COMPUTER SCORED : "+ComputerScore);

if(UserScore>ComputerScore)
   console.log(" USER WINS : "+UserScore);
else{
    console.log(" COMPUTER WINS :"+ComputerScore);
    
}
   