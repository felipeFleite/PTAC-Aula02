import { useState } from "react"

export default function main(){

    const [nome ,setNome] = useState("")
    const [telefone ,setTelefone] = useState(0)
    const [cpf ,setCpf] = useState(0)
    const [listaContatos, setListaContatos] = useState([])

    const registrar = (event) => {
        event.preventDefault()
        setListaContatos([...listaContatos,{
            nomeSalvo: nome,
            telefoneSalvo: telefone,
            cpf: cpf
        }
    ])
    }
    console.table(listaContatos)
    return(
        <main>
        <form action ="" onSubmit={registrar}>
            <label htmlFor="nome">Nome:</label>
            <input
            type = "text"
            name = "nome-contato"
            id= "nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            />

            <label htmlFor="telefone">Telefone:</label>
            <input
            type = "tel"
            name = "telefone-contato"
            id= "telefone"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            />

            <label htmlFor="cpf">Cpf:</label>
            <input
            type = "cpf"
            name = "cpf-contato"
            id= "cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            />

            {nome}
            {telefone}  

        <button id="botao">Salvar</button>
        </form>
        </main>
    )
}