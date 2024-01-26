import axios from "axios";

function Contato(){

    window.addEventListener('load', ()=>{

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {

        e.preventDefault();

      let data = new FormData(form);
      console.log(data);
    
      
      axios({
        method: 'post',
        url: 'https://netbil.com.br/api_netbil/api-teste-programacao/contato',
        headers: { 
          'Content-Type': 'application/json', 
          'authorization': 'LF22023L0TKCIZMAHNETR572022PG9BILIDNHR'
        },
        data : data
      })
      .then((res)=>{
        console.log(JSON.stringify(res.data));
      })
      .catch((err) => {throw err});
  });
});
      function submit(e){
        e.preventDefault
      }

    return(
      <>
      <br/>
      <br/>
        <form onSubmit={(e) => submit(e)}>
        <label>Nome: </label>
        <input
        type="text"
         name="nome"
       
         />
         <br/>

        <label>Email: </label>
        <input
            type="text"
         name="email"
       
         />
         <br/>

        <label>Telefone: </label>
        <input
           type="text"
         name="telefone"
        
         />
         <br/>

        <label>Cidade: </label>
        <input
           type="text"
         name="cidade"
        
         />
         <br/>

         <button type="submit">Enviar</button>
         </form>
      </>
      
    )
}

export default Contato