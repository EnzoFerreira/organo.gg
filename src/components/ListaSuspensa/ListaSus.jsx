import "../TextBox/Campo";
import "../ListaSuspensa/ListaSus.css"


const ListaSus = (props) => {
  return (
    <div className="listaSuspensa">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
export default ListaSus;
