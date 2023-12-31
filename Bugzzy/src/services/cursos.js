
const URL = 'http://127.0.0.1:8000/api/v1/publicacion'

// API CALL PUBLICACIONES
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
export const crearCurso = async (data = {}) => {
  try {
    const formData = new FormData();

    // Agrega los campos del formulario a la instancia de FormData
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const response = await fetch(`${URL}/p/`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        // No establezcas Content-Type aquí, se configurará automáticamente para FormData
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: formData, // Usa la instancia de FormData como cuerpo de la solicitud
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};



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

// export const editarCurso = async (data = {}) => {
//   const formData = new FormData();

//   // Agrega los campos del formulario a la instancia de FormData
//   Object.keys(data).forEach(key => {
//     formData.append(key, data[key]);
//   });
//   try {
//     const response = await fetch(`${URL}/p/${data.idPublicacion}/`, {
//       method: 'PUT',
//       mode: 'cors',
//       cache: 'no-cache',
//       credentials: 'same-origin',
//       headers: {
//         'Content-Type': 'application/json'

//       },
//       redirect: 'follow',
//       referrerPolicy: 'no-referrer',
//       body:formData
//     })

//     return response.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

export const editarCurso = async (data = {}) => {
  try {
    const formData = new FormData();

    // Agrega los campos del formulario a la instancia de FormData
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const response = await fetch(`${URL}/p/${data.idPublicacion}/`, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        // No establezcas Content-Type aquí, se configurará automáticamente para FormData
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: formData, // Usa la instancia de FormData como cuerpo de la solicitud
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};



export const eliminarCurso = async (idCurso) => {
  try {
    const response = await fetch(`${URL}/p/${idCurso}/`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'

      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
// No devuelve nada el servidor cuando se elimina ekisde  
    return response
  } catch (error) {
    console.log(error)
  }
}
// API CALL VIDEOS
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

export const agregarVideos = async (data = {}) => {
  try {
    const formData = new FormData();

    // Agrega los campos del formulario a la instancia de FormData
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const response = await fetch(`${URL}/v_p/`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        // No establezcas Content-Type aquí, se configurará automáticamente para FormData
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: formData, // Usa la instancia de FormData como cuerpo de la solicitud
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

// API CALL COMENTARIOS
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

// Cursos en progreso

export const iniciarCurso = async (data = {}) => {
  try {
    const response = await fetch(`${URL}/c_i/`, {
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

export const obtenerCursosIniciado = async () => {
  try {
    const response = await fetch(`${URL}/c_i/`, {
      method: 'get',
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

export const eliminarCursoIniciado = async (idCurso) => {
  try {
    const response = await fetch(`${URL}/c_i/${idCurso}/`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'

      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
// No devuelve nada el servidor cuando se elimina ekisde  
    return response
  } catch (error) {
    console.log(error)
  }
}



