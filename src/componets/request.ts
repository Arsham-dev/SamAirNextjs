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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }

    if (data) {
      options.body = JSON.stringify(data)
    }
    const url = process.env.NEXT_PUBLIC_API_URL

    const response = await fetch(url + path, options)
    status = response.status
    const responseData = await response.json()

    return { response: responseData, status: response.status }
  } catch (error) {
    return { status, error }
  }
}

export default request
