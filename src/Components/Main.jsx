import { useState } from "react"

export default function main(){

    const [nome ,setNome] = useState("")
    const [telefone ,setTelefone] = useState("")

    return(
        <form>
            <input
            type = "text"
            nome = ""
            id= ""
            onChange={(event) => setNome(event.target.value)}
            />

            {nome}

            <input
            type = "tel"
            nome = ""
            id= ""
            onChange={(event) => setTelefone(event.target.value)}
            />

            {telefone}  

        <button id="botao"></button>
        </form>
    )
}