
const URL = 'http://127.0.0.1:8000/api/v1/publicacion/p'


export const obtenerCursos = async () => {
  try {
    const response = await fetch(`${URL}/`, {
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
    const response = await fetch(`${URL}/${idCurso}/`, {
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


