let cards=[];
let cards2=["ciri.png","geralt.png","jaskier.png","jaskier.png","iorweth.png","triss.png","geralt.png","yen.png","ciri.png","triss.png","yen.png","iorweth.png"];
let objects=[];


    for(let i=0;i<12;i++)
    {
        let str='c'+i;
        objects[i]=document.getElementById(str);
        objects[i].addEventListener("click",function(){reveal(i); });
    }

    for(let i=0;i<12;i++)
    {
        let a=(Math.floor(Math.random()*100))%(12-i);
        cards.push(cards2[a]);
        console.log(a);
        console.log(cards2[a]);
        cards2.splice(a,1);

    }


let oneVisible=false;
let counter=0;
let visibleNumber;
let lock=false;
let pairsLeft=6;

const reveal=(nr)=>
{
    console.log("here   ");
    let opacity=$("#c"+nr).css('opacity');
    if(opacity!=0 && lock==false)
    {
        lock=true; 
        let obraz='url("img/'+cards[nr]+'")';
        console.log(obraz);
        $('#c'+nr).css('background-image',obraz);
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');
    
        if(oneVisible==false)
        {
            oneVisible=true;
            visibleNumber=nr;
            lock=false;
        }
        else
        {
            if(cards[visibleNumber]==cards[nr])
            {
                setTimeout(function(){HideAndSeek(visibleNumber,nr)},750);
            }
            else
            {
                setTimeout(function(){Seek(visibleNumber,nr)},1000);
            }
    
            counter++;
            $('.score').html('Turn counte:'+counter);
            oneVisible=false;
    
        } 
    }

}

const HideAndSeek=(nr1,nr2)=>{
    $('#c'+nr1).css('opacity','0');
    $('#c'+nr2).css('opacity','0');
    lock=false;
    pairsLeft--;
    if(pairsLeft==0)
    {
        $('.board').html('<h1>YOU WIN!<br>Done in '+counter+' turns</h1><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>');
    }
}

const Seek=(nr1,nr2)=>{
    let obraz='url(img/karta.png)';

    $('#c'+nr1).css('background-image',obraz);
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardA');

    $('#c'+nr2).css('background-image',obraz);
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardA');
    lock=false;
}
