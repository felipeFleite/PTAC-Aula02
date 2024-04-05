import { useState } from "react"

export default function main(){

    const [nome ,setNome] = useState("")
    const [telefone ,setTelefone] = useState(0)
    const [cpf ,setCpf] = useState(0)
    const [listaContatos, setListaContatos] = useState([])

    const registrar = (event) => {
        event.preventDefault()
        alert("CERTO!!!")
        setListaContatos([...listaContatos,{
            nomeSalvo: nome,
            telefoneSalvo: telefone,
            cpfSalvo: cpf
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
 

        <button id="botao">Salvar</button>
        </form>
        {listaContatos.map((contato,index)=> <div key={index}>
            <p>{contato.nomeSalvo}</p>
            <p>{contato.telefoneSalvo}</p>
            <p>{contato.cpfSalvo}</p>
        </div> ) }
       
        </main>
    )
}