const URL = 'http://localhost:5500/animes';



document.querySelector("#btn").addEventListener("click", postData= async()=>{

    let animeName=document.getElementById("name").value;
    let animeDescription=document.getElementById("description").value;

    const data={animeName,animeDescription};
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }

    const res = await fetch ('http://localhost:5500/animes',options);
    const blob= await res.json();
    console.log(blob);
    // console.log("{ "+ animeName+" , "+animeDescription +" }");
}
)
