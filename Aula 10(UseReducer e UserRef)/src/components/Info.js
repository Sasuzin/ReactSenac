import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Info(){
    const dados = useContext(UserContext);
    const nome = dados.name.first + ' ' + dados.name.last;
    const email = dados.email;
    const dataNas = dados.dob.date;
    const localidade = dados.location.city;
    const telefone = dados.phone;
    
    return (<ul>
        <li>Nome: {nome}</li>
        <li>E-mail: {email}</li>
        <li>Data Nascimento: {dataNas}</li>
        <li>Cidade Nascimento: {localidade}</li>
        <li>Telefone: {telefone}</li>
    </ul>);
}