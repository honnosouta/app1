import { useEffect, useState } from "react"

export default function Home() {
  const [text,setText] = useState()
  const [hello,setHello] = useState([])
  const [keyword,setKeyword] = useState("守口")


  useEffect(() =>{
    const params = {
      keyword : keyword
    }
    const query = new URLSearchParams(params)
    const fetchello = async () => {
      const responce = await fetch(`./api/hello?${query}`)
      const data = await responce.json()
      setHello(data.grm.results.shop)
    }
    fetchello()
  },[keyword])

  const clickevent = () => {
    setKeyword(text)
 }
  console.log(hello);
  return (
    <>
      <nav>
      <h1>グルメサーチ</h1>
        <div>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button onClick={clickevent}>検索</button>
        </div>
      </nav>
      {hello.map((e,i) => {
        return(
          <div class="card">
            <img src={e.photo.pc.l} alt="" /> 
            <div class="detail">
              <h2>{e.name}</h2>
              <p>{e.access}</p>
              <p>{e.address}</p>
              <p>{e.midnight}</p>
            </div> 
          </div>
        )
      })}
    </>
  )
}
const hun = () => {

}
