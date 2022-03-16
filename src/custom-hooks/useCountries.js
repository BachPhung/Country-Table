// This hook is used to fetch all countries
import { useEffect, useState } from "react"
import axios from "axios"

export const useCountries = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const baseUrl = 'https://restcountries.com/v3.1/all'
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const fetchCountries = async () => {
            try {
                const res = await axios.get(baseUrl)
                setData(res.data)
                setLoading(false)
            }
            catch (err) {
                setError(err)
            }
        }
        fetchCountries()
    }, [])
    return [data,error,loading]
}