// Add the coffee to local storage with key "coffee"
const url="https://masai-mock-api.herokuapp.com/coffee/menu";

async function getData(){
    try{
        let res= await fetch(url);
        let coffee= await res.json();
        console.log(coffee.menu.data);
        append(coffee.menu.data);
    }catch(err){
        console.log(err);
    }
    

    
}
getData();

function append(data){


    let coffee_data=document.getElementById('menu');

    data.forEach(function(el){

        let title=document.createElement('h2');
        title.innerText=el.title;

        let img=document.createElement('img');
        img.src=el.image;
        
        let price=document.createElement('h3');
        price.innerText=el.price;

        let bucket=document.createElement('button');
        bucket.id='add_to_bucket';
        bucket.innerText='Add to Bucket';
        bucket.addEventListener('click',function(){
            storeData(el);
        })
        


        coffee_data.append(title,img,price,bucket);
    })

}

let count=0;

function storeData(el){

    console.log(el);
    
    let co=document.getElementById('coffee_count');
    co.innerHTML=null;

    let num=document.createElement('h2');
    num.innerText=(count=count+1);

    co.append(num);


    let cof=JSON.parse(localStorage.getItem('coffee')) || [];

    cof.push(el);


    localStorage.setItem("coffee",JSON.stringify(cof));

}