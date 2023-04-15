import { useContext } from "react"
import DadosContext from "./DadosContext"


export default function Random(){

    const dados = useContext(DadosContext);

    if(dados)

    return(
        <div>
            <h1>nome: {dados.results[0].name.title} {dados.results[0].name.first} {dados.results[0].name.last}</h1>
            <h1>telefone: {dados.results[0].phone}</h1>
            <h1>email: {dados.results[0].email}</h1>
            <h1>Data de Aniversario: {dados.results[0].registered.date}</h1>
            <h1>endereco: {dados.results[0].location.street.name}, {dados.results[0].location.street.number}</h1>
            <img src= {dados.results[0].picture.thumbnail}/> 
        </div>
    )
}
    
        
