function Alerta(props) {
    return (
        <div className={`text-center alert alert-${props.tipo} text-center`} role="alert">
            {props.texto}
        </div>
    );
}  // <- apenas uma chave aqui, sem ponto e vírgula

export default Alerta