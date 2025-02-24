
export const SERVER_URL = import.meta.env.VITE_SERVER_URL

export const makeGetRequests = async (url, token) => {

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (response.ok) {
        return await response.json()
    }

}


export const makePostRequests = async (url, token, data) => {

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (response.ok) {
        return await response.json()
    }

}
