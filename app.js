
const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

//console.log("Connected");

for(let btn of buttons){


    btn.addEventListener('click', (e)=>{
        
        const buttonText = e.target.innerText;
       // console.log(buttonText);

        if(buttonText==='C')screen.value = "";
        else if(buttonText==='^')screen.value+='**'; 
        else if(buttonText==='x')screen.value+='*';
        else if(buttonText==='='){
            try{
                screen.value=eval(screen.value);
            } catch (e){
                screen.value = "Invalid Input."
            }
        }
        else screen.value+=buttonText;

    })


}