
const URL = 'http://127.0.0.1:8000/api/v1/usuario'


export const register = async (data = {}) => {
  try {
    const response = await fetch(`${URL}/get_usuarios/`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'

      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })

    return response.json()
  } catch (error) {
    console.log(error)

  }
}
export const login = async (cedula) => {
  try {
    const response = await fetch(`${URL}/get_usuarios/${cedula}/`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'

      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (data = {}) => {
  try {
    const response = await fetch(`${URL}/get_usuarios/${data.cedula}/`, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'

      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })

    return response.json()
  } catch (error) {
    console.log(error)
  }
}



