import "./Campo.css"

const Campo = (props) => {
    
    const placeholderMod = `${props.placeholder}...`
    
    return(
        <div className="campo">
            <label>{props.label}</label>
            <input placeholder={placeholderMod}/>
        </div>
    )
}
export default Campo;