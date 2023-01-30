/*const input = document.querySelector(".text");
const  paragraph=document.querySelector(".page-to-copy");

input.addEventListener("keyup",function() {
    paragraph.innerText = input.scrollIntoView;

});   

const input = document.querySelector(".color-input");
const  paragraph=document.querySelector(".color-box");

input.addEventListener("change", function() {
    paragraph.style.backgroundColor = input.value;

});   */



 /* const emp=["Ramya","Gagan","Rakshi"];
  const emp1=["Ramya","Gagan","Rakshi"];
           /* for(i=0;i<emp.length;i++){

                document.write(emp[i]+"<br/>");
            }
            emp.sort();
          //  emp.unshift("ram");// it adds the element at starting
     //  let merge= emp.concat(emp1);
    // emp.splice(1,0,"lemon");// it adds the element at starting
    // emp.splice(0,1,"lemon");// it removes the element at starting

          let ra=emp.slice(0);//it returns the elemets from the index
            document.getElementsByTagName("h1")[0].innerHTML=ra;  
            */

            let points=[50,9,1,3,2,6,0,4];
            document.getElementById("demo").innerHTML=points;

            function fun1(){
                points.sort();

                document.getElementById("demo").innerHTML=points;
            }
        
            function fun2(){
                points.sort(function(a,b){
                    return a-b;
                });
                document.getElementById("demo").innerHTML=points;
            }

            

            function myFunction(event) {
                 let text=event.target.tagName;
                 document.getElementById("demo2").innerHTML=text;
            }