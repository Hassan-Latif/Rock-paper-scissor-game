 function game(yourChoice){
    var humanChoice,comChoice,result;
    humanChoice=yourChoice.id;
    comChoice=ranCho(rand());
    console.log('computerChoice',comChoice);
    result=decider(humanChoice,comChoice);
    console.log(result);
    var mes=messagee(result);
    console.log(mes);
    front_end(yourChoice.id,comChoice,mes);

}
function rand(){
    return Math.floor(Math.random()*3);

}
function ranCho(number){
    return ['rock','paper','scissor'][number];
}

function decider(yourChoicee,computerChoice){
    var db={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };
    var yourScore=db[yourChoicee][computerChoice];
    var compScore=db[computerChoice][yourChoicee];
    return [yourScore,compScore];
}
function messagee([yourScore,compScore]){
    if(yourScore===0){
        return {message:'You lost',color:'red'};
    }
    else if(yourScore===0.5){
        return {message:'It is a draw',color:'yellow'};
    }
    else {
        return {message:'You won',color:'green'};
    }

}

function front_end(humanImage,compImage,messagee){
    var imgdb={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humDiv=document.createElement('div');
    var comDiv=document.createElement('div');
    var mesDiv=document.createElement('div');

    humDiv.innerHTML="<img src='"+ imgdb[humanImage] +"' height=120 width=120 style=' box-shadow:0px 10px 50px rgba(37,50,233,1); '>";
  
    
    mesDiv.innerHTML="<h2 style='color: "+ messagee['color'] + "; font-size:40px; padding:30px; '>" + messagee['message'] +"</h2>";
 
    
    comDiv.innerHTML="<img src='"+imgdb[compImage]+"' height=120 width=120 style='box-shadow:0px 10px 50px rgba(243,38,233,1);  ' >";


    document.getElementById('abc').appendChild(humDiv);
    document.getElementById('abc').appendChild(mesDiv);
    document.getElementById('abc').appendChild(comDiv);

}








