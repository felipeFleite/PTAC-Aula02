import {useState} from "react"

export default function Main(){
const [nome, setNome] = useState("")

  return(
    <main>
      <form>
      <input
      type="text"
      name="" id=""
      onChange={(event) => setNome(event.target.value)}
      />
      {nome}
      </form>
    </main>
  )
}