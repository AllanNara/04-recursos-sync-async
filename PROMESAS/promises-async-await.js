const fs = require("fs/promises"); // OTRA FORMA DE EXPORTAR FS DIRECTAMENTE CON PROMESAS

async function main() {
	try {
		// LECTURA
		try {
			const readData = await fs.readFile("./example.txt", "utf-8");
			console.log("Resultado de archivo 'example.txt': \n", readData);
		} catch (err) { // SI NO EXISTE EL ARCHIVO ENTRA EN EL 'CATCH' Y LO CREAMOS
			console.error("¡No se puede leer un archivo que no existe...!");
			await fs.writeFile("./example.txt", "");
			console.log("Archivo creado correctamente.");
		}

		// ESCRITURA
		await fs.writeFile("./example.txt", ">ARCHIVO SOBREESCRITO COMPLETAMENTE");
		console.log("Archivo sobreescrito correctamente.");

		// ACTUALIZACION
		await fs.appendFile("./example.txt", "\n>ESTA LINEA FUE AGREGADO CON promises/appendFile");
		console.log("Texto agregado correctamente.");

		// NUEVA LECTURA
		const newReading = await fs.readFile("./example.txt", "utf-8");
		console.log("Resultado de archivo 'example.txt': \n", newReading);

		// BORRADO
		await fs.unlink("./example.txt");
		console.log("Archivo eliminado correctamente.");

		// CREAR NUEVO DIRECTORIO
		await fs.mkdir("./newFolder");
		console.log("Carpeta creada correctamente.");

		// CREAMOS ARCHIVO DENTRO DEL DIRECTORIO
		await fs.writeFile("./newFolder/newText.txt", ">ESTE ES UN TEXTO DE EJEMPLO PARA EL ARCHIVO 'newText.txt'");
		console.log("Archivo creado correctamente.");

		// LECTURA DEL NUEVO ARCHIVO
		const readDataOnFolder = await fs.readFile("./newFolder/newText.txt", "utf-8");
		console.log("Resultado de archivo 'newText.txt': \n", readDataOnFolder);

		// LEER DIRECTORIO
		const files = await fs.readdir("./newFolder");
		console.log("Resultado de lectura del directorio 'newFolder': ", files);

		// BORRAMOS EL ARCHIVO DEL NUEVO DIRECTORIO
		await fs.unlink("./newFolder/newText.txt");
		console.log("Archivo eliminado correctamente.");

		// BORRAMOS DIRECTORIO
		await fs.rmdir("./newFolder");
		console.log("Directorio eliminado correctamente.");
	} catch (err) {
		console.error(err);
	}
}

main();
