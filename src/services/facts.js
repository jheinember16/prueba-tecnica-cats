const CAT_API = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_API)

    if (!res.ok) throw new Error('Error fetching fact')

    const data = await res.json()
    const fact = data.fact
    return fact
  } catch (err) {
    // Manejar errores al intentar recuperar la cita.
    // Aquí podrías mostrar un mensaje al usuario o realizar
    // alguna otra acción para notificar del error.
    console.error('Error fetching cat fact:', err)
    throw err // Re-lanzar el error para que el llamador también pueda manejarlo si es necesario.
  }
}
