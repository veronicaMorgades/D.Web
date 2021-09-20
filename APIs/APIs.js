let keyCel= '188DA836D4C246858F05D239AB82A216';
let keyEmail = 'A1A1997ADD334F2A95AC63E26C107E0B';


const verificarEmail = async () =>{


    direCorreo=document.getElementById('correo').value;

    link='https://api.verimail.io/v3/verify?email='+direCorreo+'&key='+keyEmail;

   

    const response = await fetch(link).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    console.log(res.status, res.data)
    let html='';
        if(res.data.deliverable===true){
            html=(
            `<div class="alert alert-primary" role="alert">
            Correo electrónico introducido válido
            </div>
             `);
        }else(html="Correo incorrecto");
    const div= document.querySelector('.resultados2');
    console.log(html);
    div.innerHTML=html;
}));;

};



const verificarNumero = async () =>{

    
    codNumero=document.getElementById('codNumero').value;
    numero=document.getElementById('numero').value;

    
   link='https://api.veriphone.io/v2/verify?phone=%2B'+codNumero+'-'+numero+'&key='+keyCel;

   

   const response = await fetch(link).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    console.log(res.status, res.data)
    let html='';
        console.log(res.data.phone_valid);
        if(res.data.phone_valid===true){
            html=(
            `
            <div class="alert alert-primary" role="alert">
            Número introducido válido, país: ${res.data.country}, compañía: ${res.data.carrier}
            </div>
            `
            );
        }else(html='Número incorrecto');
        const div= document.querySelector('.resultados');
        console.log(html);
        div.innerHTML=html;
}));;;
};