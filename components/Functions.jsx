const API = process.env.NEXT_PUBLIC_API
import axios from "axios"
useEffect(() => {
    axios.get(`${API}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}, [])