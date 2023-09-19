

function Card({ name, fundacao, criador, local, logo}) {

    return(
        <section className={StyleSheet.Card}>
        <h3>{name}</h3>
        <p>{fundacao}</p>
        <p>{criador}</p>
        <p>{local}</p>
        <img src={logo} alt="" style={{width: '250px', height: '100px'}}/>
        </section>
    )
}
export default Card