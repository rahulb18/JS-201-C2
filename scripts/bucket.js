// On clicking remove button the item should be removed from DOM as well as localstorage.


function append(){

    let data=JSON.parse(localStorage.getItem("coffee"));

    let ap=document.getElementById('bucket');
    ap.innerHTML=null;

    data.forEach(function(el,index){

        let title=document.createElement('h2');
        title.innerText=el.title;

        let img=document.createElement('img');
        img.src=el.image;
        
        let price=document.createElement('h3');
        price.innerText=el.price;

        let bucket=document.createElement('button');
        bucket.id='remove_coffee';
        bucket.innerText='Remove';
        bucket.addEventListener('click',function(){
            remove(index);
        })
        


        ap.append(title,img,price,bucket);
    })
}
append();

function remove(index){
    
    let data=JSON.parse(localStorage.getItem('coffee'));

    let newData=data.filter(function(el,i){
        if(i===index)
        {
            
        }
        else
        {
            return i!==index;
        }
    });
    localStorage.setItem("coffee",JSON.stringify(newData));
    append();
    console.log(newData);
}


function calculate(){
    let data=JSON.parse(localStorage.getItem('coffee'));
    let sum=0;
    for(let i=0;i<data.length;i++)
    {
        sum=sum+data[i].price;
    }
    let p=document.getElementById('total_amount');
    p.innerHTML=null;

    let h3=document.createElement('h3');
    h3.innerText=sum;

    p.append(h3);
}
calculate();