
import "./styles.css"
export const TextInput = ({searchvalue,handleChage}) =>{
    return (
        <input className="text-input" type="search" onChange={handleChage} value={searchvalue} placeholder=""/>
    )

}
  