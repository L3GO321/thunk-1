import { useSelector } from "react-redux"

export const FactsList = () => {
  const facts = useSelector((store) => store)

  return (
    <ul>
      {facts.map((fact, index) => <li key={index}>{fact}</li>)}
    </ul>
  )
}
