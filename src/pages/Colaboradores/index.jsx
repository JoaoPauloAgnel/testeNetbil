import { useEffect, useState } from 'react';
import styles from './Colaboradores.module.css'
import axios from 'axios';
import Card from "../../components/Card"




function Colaboradores(){

  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
      const buscarColaboradores = async () => {
          const resposta = await axios.get("https://netbil.com.br/api_netbil/api-teste-programacao/colaboradores",{
            headers:{
              authorization: 'LF22023L0TKCIZMAHNETR572022PG9BILIDNHR'
            }
          })

          const data = resposta.data;
         console.log(data)
          setColaboradores(data)

      }
      buscarColaboradores()
  }, [])


  return (
      <section className={styles.colabs}>

          <h2>Colaboradores</h2>
          {
              colaboradores.length > 0 ? (
                  <section className={styles.lista}>
                      {
                          colaboradores.map((colab) => (
                              < Card
                                  key={colab.ID}
                                  nome={colab.Nome}
                                  sobre={colab.Sobre}
                                  foto={colab.Foto}
                               
                                   />
                          ))
                      }
                  </section>
              ) : (

                  <div className={styles.loader_circle} ></div>

              )
          }

      </section>
  )
   

}
export default Colaboradores