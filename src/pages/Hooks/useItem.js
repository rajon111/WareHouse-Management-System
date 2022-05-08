import { useEffect, useState } from "react"

const useItem = id => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const url = `https://warm-river-80956.herokuapp.com/inventory/${ id }`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [product])

    return [product, setProduct]
}
export default useItem