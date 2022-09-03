const btnEnviar = document.getElementById('btn-enviar');
const contenedor = document.getElementById('body')

btnEnviar.addEventListener ('mouseover', () => {
    const div = document.createElement('div')
    div.className = "mensaje"
    div.innerHTML = `
                    <h2>Mensaje Enviado</h2>
    `
    contenedor.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 3000);
})