import "./Campo.css"

const Campo = (props) => {
    const placeholderMod = `${props.placeholder}...`

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo">
            <label>{props.label}</label>
            <input value = {props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMod}/>
        </div>
    )
}
export default Campo;