#! /usr/bin/env node

import inquirer from "inquirer"
import {differenceInSeconds} from "date-fns"

console.log("=".repeat(70))
console.log("\n\t Welcome to -codewith Areeba- COUNTDOWN TIMER\n\t")
console.log("=".repeat(70))

let response=await inquirer.prompt([
    {
        name:"userInput",
        type:"number",
        message:"Enter Your Time Limit",
        validate:(input)=>{
            if(isNaN(input)){
                return "Enter Valid Number"
            }
            else if(input>60){
                return "Duration Limit must be 60"
            }
            else{
                return true
            }
        }
    }
])
let input = response.userInput

function startTime(val:number){
    let int_time = new Date().setSeconds(new Date().getSeconds()+val)
    let interval_time = new Date(int_time)
    setInterval((()=>{
         let current_time=new Date()
         let time_diff= differenceInSeconds(interval_time,current_time)
         if(time_diff <= 0){
            console.log("Timer End")
            process.exit()
         }
         let min=Math.floor((time_diff%(3600*24))/3600)
         let sec=Math.floor(time_diff%60)
         console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)
    }),1000)
}
startTime(input);




