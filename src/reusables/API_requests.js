export const SERVER_URL = import.meta.env.VITE_SERVER_URL

export const makeGetRequests = async (url, token) => {

    try {
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
        }else{
            return await response.json()
        }
    } catch (error) {
        console.log("Error:", error)
        return {"error": "Network Error, please refresh page"}
    }

}


export const makePostRequests = async (url, token, data, fileUpload) => {

    const headers = fileUpload ? {
            "Authorization": `Bearer ${token}`
        } :
        {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
   try {
    const response = await fetch(url, {
        method: "POST",
        body: fileUpload ? data : JSON.stringify(data),
        headers
    })

    if(response.status === 500){
        const result = await response.json()
        if(result?.error?.includes("url-safe base64-encoded bytes")){
            return  {"error": "Wrong Decryption key"}
        }
        return  {"error": result?.error}
    }

    if (response.ok) {
        return await response.json()
    }else{
        return await response.json()
    }
   } catch (error) {
    console.log("error", error)
    return  {"error": "Network Error, please refresh page"}
   }


}


export const makeDeleteRequests = async (url, token) => {

    const headers =  {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
    }

    try {
    const response = await fetch(url, {
        method: "DELETE",
        headers
    })

    if(response.status === 500){
        const result = await response.json()
        return  {"error": result?.error}
    }

    if (response.ok) {
        return await response.json()
    }else{
        return await response.json()
    }
   } catch (error) {
    console.log("error", error)
    return  {"error": "Network Error, please refresh page"}
   }

}
