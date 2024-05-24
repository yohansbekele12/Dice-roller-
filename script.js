function rollDice(){
const num=document.getElementById('numdice').value;
const result=document.getElementById('result');
const diceimage=document.getElementById('imageresult');
const winimage=document.getElementById('winimage');
const values=[]; //this is the array to store the random numbers generated
const image=[];  //this is the array to store the images generated

for (let i=0; i < num; i++) { // this is the for loop to generate the random numbers
    const value=Math.round(Math.random() * 6) + 1; //this is the random number generator
    values.push(value);   //this pushs the values to the array we created above
    image.push(`<img src="dice/${value}.png">`); //this pushes the images to the array we created above using the randome value generated as refrence 
}
result.textContent=`Dice: ${values.join(`, `)}`;
diceimage.innerHTML=image.join(``); //this joins the images into one string
winimage.innerHTML=`<img src="dice/tenor.gif">`; //this is the winning image
}
