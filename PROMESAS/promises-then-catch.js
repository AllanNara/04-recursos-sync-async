const fs = require("fs");

//- CREAMOS EL ARCHIVO DE ANTEMANO PARA SIMPLIFICAR EL CODIGO
fs.promises.writeFile("./example.txt", "")
	.then(() => {
		console.log("Archivo creado correctamente.");
		fs.promises.writeFile("./example.txt", ">ARCHIVO SOBREESCRITO COMPLETAMENTE"); // ESCRITURA
	})
	.then(() => {
		console.log("Archivo sobreescrito correctamente.");
		fs.promises.appendFile("./example.txt", "\n>ESTA LINEA FUE AGREGADO CON promises/appendFile"); // ACTUALIZACION
	})
	.then(() => {
		console.log("Texto agregado correctamente.");
		return fs.promises.readFile("./example.txt", "utf-8"); // LECTURA
	})
	.then((data) => {
		console.log("Resultado de archivo 'example.txt': \n", data);
		fs.promises.unlink("./example.txt"); // BORRADO
	})
	.then(() => {
		console.log("Archivo eliminado correctamente.");
		fs.promises.mkdir("./newFolder"); // CREAR NUEVO DIRECTORIO
	})
	.then(() => {
		console.log("Carpeta creada correctamente.");
		fs.promises.writeFile("./newFolder/newText.txt", ">ESTE ES UN TEXTO DE EJEMPLO PARA EL ARCHIVO 'newText.txt'"); // CREAMOS ARCHIVO DENTRO DEL DIRECTORIO
	})
	.then(() => {
		console.log("Archivo creado correctamente.");
		return fs.promises.readFile("./newFolder/newText.txt", "utf-8"); // LECTURA DEL NUEVO ARCHIVO
	})
	.then((data) => {
		console.log("Resultado de archivo 'newText.txt': \n", data);
		return fs.promises.readdir("./newFolder"); // LEER DIRECTORIO
	})
	.then((data) => {
		console.log("Resultado de lectura del directorio 'newFolder': ", data);
		fs.promises.unlink("./newFolder/newText.txt"); // BORRAMOS EL ARCHIVO DEL NUEVO DIRECTORIO
	})
	.then(() => {
		console.log("Archivo eliminado correctamente.");
		fs.promises.rmdir("./newFolder"); // BORRAMOS DIRECTORIO
	})
	.then(() => console.log("Directorio eliminado correctamente."))
	.catch((err) => console.error(err));
