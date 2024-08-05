document.getElementById('obtenerPais').addEventListener('click', () => {
    const nombrePais = document.getElementById('countryInput').value;
    fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            const pais = data[0];
            const informacionPais = `
                <h2>${pais.name.common}</h2>
                <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'No disponible'}</p>
                <p><strong>Región:</strong> ${pais.region}</p>
                <p><strong>Población:</strong> ${pais.population.toLocaleString()}</p>
                <p><strong>Área:</strong> ${pais.area} km²</p>
                <p><strong>Moneda:</strong> ${Object.values(pais.currencies)[0].name}</p>
                <p><strong>Lenguajes:</strong> ${Object.values(pais.languages).join(', ')}</p>
                <img src="${pais.flags.svg}" alt="Bandera de ${pais.name.common}" width="200">
            `;
            document.getElementById('countryInfo').innerHTML = informacionPais;
        })
        .catch(error => console.error('Error al obtener la información del país:', error));
});
