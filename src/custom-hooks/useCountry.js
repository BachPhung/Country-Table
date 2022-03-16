// This hook is used to fetch one specific country
// This hook is used to fetch all countries
import { useEffect, useState } from "react"
import axios from "axios"

export const useCountry = (name) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const baseUrl = `https://restcountries.com/v3.1/name/${name}`
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const fetchCountry = async () => {
            try {
                const res = await axios.get(baseUrl)
                setData(res.data)
                setLoading(false)
            }
            catch (err) {
                setError(err)
            }
        }
        fetchCountry()
    }, [baseUrl])
    return [data,error,loading]
}