
const URL = 'http://127.0.0.1:8000/api/v1/publicacion'


export const obtenerCursos = async () => {
  try {
    const response = await fetch(`${URL}/p/`, {
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

export const obtenerCursoPorId = async (idCurso) => {
  try {
    const response = await fetch(`${URL}/p/${idCurso}/`, {
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

export const capitloCursos = async () => {
  try {
    const response = await fetch(`${URL}/v_p/`, {
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

export const comentariosCursos = async () => {
  try {
    const response = await fetch(`${URL}/c_p/`, {
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

export const comentar = async (data = {}) => {
  try {
    const response = await fetch(`${URL}/c_p/`, {
      method: 'post',
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



