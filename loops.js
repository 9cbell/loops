function loopOne(time){
      while(time){
            if(time % 5 == 0){
                  console.log("AHHH " +time+" seconds left!");
            }
            console.log(time+" seconds left.");
            time = time - 1;
      }
      console.log("Done Son!");
}

function loopTwo(number,power){
    let sum=0;
    //p is the current power
    for(let p=0; p<=power; p++){
    sum=sum + Math.pow(number,p)
    //new=old+next dude
    }
    return sum;
}

function loopThree(symbol, number){
    let lasttime="";
    for(let s=1; s<=number;s++){
        lasttime=lasttime+symbol;
        console.log(lasttime);
    }

}

function main(){
    //Testing each function
    loopOne(10);
    loopOne(25);

    let powersOfTwo = loopTwo(2,10);
    let powersOfFive = loopTwo(5,4);
    console.log("The sum is "+powersOfTwo);
    console.log("The sum is "+powersOfFive);

    loopThree("#",6);
    loopThree("$",20);
    loopThree("x",10);

    console.log("You will need to scroll up to check all of them.");
}

//Hit ctrl + Shift + B to run the program.
//Hit ESC to make the printout messages go away.
main();
