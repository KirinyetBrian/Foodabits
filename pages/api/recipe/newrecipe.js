import axios from 'src/lib/axios'
export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    // if (!body.first || !body.last) {
    //   // Sends a HTTP bad request error code
    //   return res.status(400).json({ data: 'First or last name not found' })
    // }
    const response = axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Recipe`, {
       body,
       method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
      })
      console.log('response: ', response)
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first} ${body.last}` })
  }
  