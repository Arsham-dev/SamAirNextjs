/* eslint-disable no-undef */
async function request<T>(
  path: string,
  method: string,
  data?: T
): Promise<any> {
  let status = 0
  try {
    const options: RequestInit = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (data) {
      options.body = JSON.stringify(data)
    }
    const url = import.meta.env.VITE_SOME_KEY

    const response = await fetch(url + path, options)
    status = response.status
    // console.log(response.status)
    const responseData = await response.json()
    // console.log(responseData)

    return { response: responseData, status: response.status }
  } catch (error) {
    return { status, error }
  }
}

export default request
