function Estudante (props){
    let estudante = props.estudante
    if(estudante == true){
        return (
            <>
            <h1>Você é estudante</h1>
            </>
        )
    }else {
        return (
            <>
            <h1>Você não é estudante</h1>
            </>
        )
    }
}
export default Estudante;