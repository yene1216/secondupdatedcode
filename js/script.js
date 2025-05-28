document.addEventListener("DOMContentLoaded",(event)=>{
    const logo=document.getElementById("logo");
    const header=document.getElementById("header");
  
    logo.style.width="10%"
    logo.style.height="10vh"
    logo.style.borderRadius="10%"
    header.style.display="flex"
    header.style.justifyContent="center"
    header.style.justifyContent="space-between"
    header.style.backgroundColor="black"
    header.style.position="sticky"

    const  ulist=document.getElementById("ulist");
    
    ulist.style.display="flex"

    ulist.style.gap="20%"
    ulist.style.listStyleType="none"
  
    const list=document.querySelectorAll("li")
    const div=document.getElementById('talk');
    div.style.backgroundColor="blue"
    div.style.height="8vh"
    div.style.marginTop="10px"
    div.style.marginRight="10px"
    div.style.borderRadius="50px"
    div.style.width="100px"
    div.addEventListener("mouseover",(event)=>{
        div.style.backgroundColor="yellow"
        div.style.color="green"
        div.style.animationDuration="0.5s"

    })
    div.addEventListener("mouseout",(event)=>{
        div.style.backgroundColor="blue"
        div.style.color="green"
    })

    

    const linksInLi = document.querySelectorAll('li a'); // Selects all <a> inside <li>
    linksInLi.forEach(link => {
    link.style.textDecoration = 'none';
    link.style.color="white"
    link.addEventListener("mouseover",(event)=>{
        link.style.color="yellow"

    })

    link.addEventListener("mouseout",(event)=>{
        link.style.color="white"
    })
    
});
   
   const verification=document.getElementById("verify");

   const Email=document.getElementById("email");
   const submit=document.getElementById("submit")


   
    submit.addEventListener("click",(event)=>{
        if(!Email.value.includes("@gmail.com")){


            verification.innerHTML="your email must be a valid Gmail address"
     }
        else{
             verification.innerHTML=" "
    }
        const p=document.getElementById("password");
        const password=document.getElementById("password").value;
        console.log(password.length)
         if(password.length < 8){
            p.innerHTML="your password must contain at least 8 character";
         }
         else{
            p.innerHTML=" "
         }
    })
  
});
