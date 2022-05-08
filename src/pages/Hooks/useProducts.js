import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://warm-river-80956.herokuapp.com/inventory`)
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(!loading)
    }, [products])

    return [products, setProducts]
}
export default useProducts