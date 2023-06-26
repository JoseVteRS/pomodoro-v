export const printHello = (nombre) => {
    // if (typeof nombre === 'number') console.error('El nombre no puede ser un número')
    if (!nombre) return "Hello World"
    else
        return "Hello World " + nombre
}
