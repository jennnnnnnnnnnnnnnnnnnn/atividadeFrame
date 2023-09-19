import { useState, useEffect } from 'react'
import Card from '../card/index'

function TournamentBracket() {

  const [Repositorios, setRepositorios] = useState([])

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch('https://raw.githubusercontent.com/Fizada9/API-MARCAS/main/tudo.json')
      const data = await response.json()
      setRepositorios(data)
    }
    buscarRepositorios()
  }, [])
      const filtroele= Repositorios.filter(ele=>ele.tipo==="eletronico")
      const filtrocar= Repositorios.filter(ele=>ele.tipo==="carros")
      const filtroecom= Repositorios.filter(ele=>ele.tipo==="comidas")
      const filtrorop= Repositorios.filter(ele=>ele.tipo==="roupas")
  return (
    <>
      <section className={StyleSheet.Projetos}>
        <h2>ELETRONICOS</h2>
        {
          filtroele.length > 0 ? (
            <section className={styleMedia.lista}>
              {
                filtroele.map((repo) => (
                  <Card
                    tipo={repo.tipo}
                    name={repo.nome}
                    fundacao={repo.fundacao}
                    criador={repo.criador}
                    local={repo.local_fundacao}
                    logo={repo.logo}
                  />
                ))
              }
              </section>
          ) : (
            <p>Carregando repositorios...</p>
          )
        }
      </section>

      <section className={StyleSheet.Projetos}>
        <h2>ROUPAS</h2>
        {
          filtrorop.length > 0 ? (
            <section className={styleMedia.lista}>
              {
                filtrorop.map((repo) => (
                  <Card
                    tipo={repo.tipo}
                    name={repo.nome}
                    fundacao={repo.fundacao}
                    criador={repo.criador}
                    local={repo.local_fundacao}
                    logo={repo.logo}
                  />
                ))
              }
              </section>
          ) : (
            <p>Carregando repositorios...</p>
          )
        }
      </section>

      <section className={StyleSheet.Projetos}>
        <h2>COMIDAS</h2>
        {
          filtroecom.length > 0 ? (
            <section className={styleMedia.lista}>
              {
                filtroecom.map((repo) => (
                  <Card
                    tipo={repo.tipo}
                    name={repo.nome}
                    fundacao={repo.fundacao}
                    criador={repo.criador}
                    local={repo.local_fundacao}
                    logo={repo.logo}
                  />
                ))
              }
              </section>
          ) : (
            <p>Carregando repositorios...</p>
          )
        }
      </section>

      <section className={StyleSheet.Projetos}>
        <h2>CARROS</h2>
        {
          filtrocar.length > 0 ? (
            <section className={styleMedia.lista}>
              {
                filtrocar.map((repo) => (
                  <Card
                    tipo={repo.tipo}
                    name={repo.nome}
                    fundacao={repo.fundacao}
                    criador={repo.criador}
                    local={repo.local_fundacao}
                    logo={repo.logo}
                  />
                ))
              }
              </section>
          ) : (
            <p>Carregando repositorios...</p>
          )
        }
      </section>
    </>
  )
}




export default TournamentBracket