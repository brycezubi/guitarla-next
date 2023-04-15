export const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha)
  const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
  }
  return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const formatearPrecio = (precio)=>{
  return precio.toLocaleString('es-PE',{
    style:'currency',
    currency:'PEN'
  })
}
