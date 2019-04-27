module.exports.datosLlenos = (req, res, next) => {
    const { nombre, edad, apellidos } = req.body;

    if (!nombre)
        return res.send({
            error: 'Nombre requerido.'
        });
    if (!edad)
        return res.send({
            error: 'Edad requerida.'
        });
    if (!apellidos) {
        return res.send({
            error: 'Apellidos requeridos.'
        });
    }
    if (typeof(apellidos) != 'object')
        return res.send({
            error: 'Apellidos no válidos.'
        });
    if (!apellidos.paterno)
        return res.send({
            error: 'Apellido paterno requerido.'
        });
    if (!apellidos.materno)
        return res.send({
            error: 'Apellido materno requerido.'
        });

    next();
};

module.exports.datosValidos = (req, res, next) => {
    const { nombre, edad, apellidos, profesion } = req.body;
    let errores = [];

    if (typeof(nombre) != 'string')
        errores.push({
            error: 'Nombre no válido.'
        });
    if (typeof(edad) != 'number')
        errores.push({
            error: 'Edad no válida.'
        });
    if (typeof(apellidos.paterno) != 'string')
        errores.push({
            error: 'Apellido paterno no válido.'
        });
    if (typeof(apellidos.materno) != 'string')
        errores.push({
            error: 'Apellido materno no válido.'
        });
    if (profesion && typeof(profesion) != 'string')
        errores.push({
            error: 'Profesión no válida.'
        });
    
    if (errores.length > 0)
        return res.send(errores);
    
    next();
};