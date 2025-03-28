document.getElementById('get').addEventListener('click',function(event){
    event.preventDefault();

    
    
    const main=document.getElementById('main-balance').innerText;

    const getSalami=document.getElementById('add-amount').value;

    const convertMain=parseInt(main);
    const convertGetSalami=parseInt(getSalami);

    const sum=convertMain+convertGetSalami;

    const number=document.getElementById('number').value;
    const pin=document.getElementById('pin').value;
    const convertPin=parseInt(pin);
    if(number.length===11)
    {
        if(convertPin===1234)
        {
            document.getElementById('main-balance').innerText=sum;
            document.getElementById('last').innerText="[See your available balance now]" 
            document.getElementById('mon').innerText="MONER SALAAMI EE BORO SALAMI"
            document.getElementById('eid').innerText="EID MIBARAK!"
            document.getElementById('anas').innerText="Made by: Anas JKKNIU CSE-17"


        }   
        else
        {
            const pin=document.getElementById('pin');
            pin.value="";
            pin.placeholder="Invalid Pin";
        }

    }
    else
    {
        const pin=document.getElementById('number');
        pin.value="";
        pin.placeholder="Invalid Number";
   
    }



   
})

