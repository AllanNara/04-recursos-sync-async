------------------------------------------------------------------------------------------------------------------
Para probar cada uno de los archivos en las carpetas LEGACY/PROMESAS, ejecutar en la consola 'node <archivo_a_ejecutar>, por ejemplo: node PROMESAS/promises-async-await.js
Todos los scripts realizan la misma funcion, pero utilizando distintos metodos vistos en clases que se resumiran a continuacion
------------------------------------------------------------------------------------------------------------------

Callbacks:
    Definición: 
        Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan una vez que la operación asíncrona ha completado su tarea.
    Aspectos a considerar:
        Los callbacks fueron la primera forma de manejar la asincronía en JavaScript y Node.js.
        Pueden llevar a lo que se conoce como el "callback hell" o "infierno de callbacks", que puede hacer que el código sea difícil de leer y mantener.
        No proporcionan una forma natural de manejar errores y pueden llevar a un código propenso a errores si no se manejan adecuadamente.

Sincronismo:
    Definición: 
        Al utilizar métodos sincrónicos del módulo fs, las operaciones de lectura/escritura de archivos se bloquean hasta que se completa la operación, lo que significa que el código espera a que la operación finalice antes de continuar.
    Aspectos a considerar:
        Aunque son simples de usar, pueden hacer que una aplicación sea menos escalable y menos eficiente, especialmente en entornos que necesitan manejar múltiples operaciones de manera concurrente.

Promesas con Then/Catch:
    Definición: 
        Las promesas proporcionan una forma más estructurada y legible de manejar operaciones asíncronas. Permiten encadenar acciones y manejar errores de una manera más elegante que los callbacks.
    Aspectos a considerar:
        Son ampliamente adoptadas y forman parte de las prácticas modernas en JavaScript y Node.js.
        Ayudan a evitar el "callback hell" y facilitan la creación de flujos de control más legibles.

Promesas con Async/Await:
    Definición: 
        async/await es una sintaxis de JavaScript que hace que el código asíncrono se vea y se sienta más como código síncrono. Utiliza promesas internamente y proporciona una forma más intuitiva de trabajar con ellas.
    Aspectos a considerar:
        Es especialmente útil para simplificar el código y hacerlo más legible cuando se trabaja con múltiples operaciones asíncronas que deben ejecutarse en un orden específico.

-----------------------------------------------------------------------------------------------------------------

Recomendación Actual:

    En la actualidad, se recomienda el uso de promesas y async/await para manejar operaciones asíncronas en JavaScript y Node.js. Esto se debe a que proporcionan un código más limpio, estructurado y fácil de entender en comparación con los callbacks y las operaciones sincrónicas.

Aclaración:

    Aunque el uso de promesas y async/await se ha convertido en la práctica recomendada para manejar la asincronía en JavaScript y Node.js en la actualidad, los callbacks y las operaciones sincrónicas siguen siendo válidos y pueden ser útiles en ciertos contextos.