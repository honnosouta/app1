// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(req, res){
  const APIKEY = `d885a2375ca7b09b`
  // const keyword = `寿司`

  const responce = await
  fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${APIKEY}&keyword=${req.query.keyword}&format=json`)
  const grm = await responce.json()
  res.status(200).json({grm})
}