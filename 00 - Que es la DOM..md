
El DOM o mas conocido como (Document Object Models) le permite a JavaScript acceder, recorrer, crear, reemplazar, editar y eliminar los elementos HTML que conforman nuestra página, es una interfaz de programación estándar, esto quiere decir que está pensado como un medio de comunicación para acceder a los elementos que forman nuestro sitio web.

El DOM se ve como un árbol en el que cada hoja o rama representa un elemento de HTML, la idea de representarlo como un árbol viene de buscar representar la jerarquía de nuestros documentos, es decir, quiénes son hijos de quién, cuáles son hermanos, etc.

*Funciones para modificar el DOM*

Para modificar el DOM (Document Object Models) en JavaScript, puedes utilizar una variedad de funciones y métodos proporcionados por el lenguaje. Aquí tienes algunas de las funciones y métodos más comunes para manipular el DOM:

``` javascript
//getElementById**: Esta función te permite obtener una referencia a un elemento del DOM utilizando su ID.//
*const element = document.getElementById('miElemento');*

//querySelector: Esta función te permite seleccionar un elemento del DOM utilizando selectores CSS.
*const element = document.querySelector('.miClase');*

//createElement: Puedes utilizar esta función para crear un nuevo elemento HTML.
*const newElement = document.createElement('div');*

//appendChild: Esta función te permite agregar un elemento como hijo de otro elemento.
parentElement.appendChild(newElement);

//removeChild: Puedes utilizar esta función para eliminar un elemento hijo de otro elemento.
parentElement.removeChild(childElement);

//innerHTML: Este atributo te permite acceder o modificar el contenido HTML de un elemento.
element.innerHTML = 'Nuevo contenido';

//innerText: Similar a `innerHTML`, pero solo manipula el texto interno del elemento, sin interpretar HTML.
element.innerText = 'Texto actualizado';

//setAttribute: Esta función te permite agregar o modificar atributos en un elemento.
element.setAttribute('class', 'nuevaClase');

//classList: El objeto `classList` proporciona métodos para agregar, eliminar y verificar clases en un elemento.
element.classList.add('claseNueva');
element.classList.remove('claseExistente');

//addEventListener**: Esta función se utiliza para agregar un evento a un elemento. Puedes usarla para manejar eventos como clics, cambios, etc.
element.addEventListener('click', function() {
    //Tu código de manejo de evento aquí
});
//Busca los hijos de nuestros elementos de un id.
console.log(etiqueta.childnodes)

//Acceder a las imagenes.

logo[0].src = link 


```

![[Pasted image 20230925114416.png]]

02 -  Que es JQUERY
  
jQuery es una biblioteca de JavaScript que se utiliza comúnmente para simplificar la manipulación del Document Object Model (DOM) en páginas web. Fue creado para facilitar la escritura de código JavaScript y simplificar tareas comunes, como la manipulación de elementos HTML, la gestión de eventos, las peticiones AJAX y las animaciones.

```javascript

$("#id1").val

```

jQuery simplifica la manipulación del DOM proporcionando una API fácil de usar y funcionalidades que simplifican muchas tareas comunes, como la selección de elementos HTML, la manipulación de contenido, la adición o eliminación de elementos, la gestión de eventos y más. Con jQuery, puedes escribir código JavaScript más conciso y compatible con diferentes navegadores sin tener que lidiar con las peculiaridades de cada navegador.

En jQuery, puedes utilizar varios comandos o métodos para interactuar con el DOM. Algunos de los comandos más comunes son:
``` javascript

//$()` o `jQuery()`: Estos son los selectores principales que se utilizan para seleccionar elementos del DOM. Puedes pasar un selector CSS como argumento para seleccionar uno o varios elementos. Por ejemplo:

// Seleccionar un elemento por su ID
var elemento = $('#miElemento');

// Seleccionar todos los elementos con la clase 'miClase'
var elementos = $('.miClase');

// Seleccionar todos los elementos <p>
var parrafos = $('p');

//`.html()`: Este método se utiliza para obtener o establecer el contenido HTML de un elemento seleccionado. Por ejemplo:

// Obtener el contenido HTML de un elemento
var contenido = $('#miElemento').html();

// Establecer el contenido HTML de un elemento
$('#miElemento').html('<p>Nuevo contenido</p>');

//`.text()`: Similar a `.html()`, pero se utiliza para obtener o establecer el contenido de texto de un elemento.
// Obtener el contenido de texto de un elemento
var texto = $('#miElemento').text();

// Establecer el contenido de texto de un elemento
$('#miElemento').text('Nuevo texto');

//`.addClass()` y `.removeClass()`: Estos métodos se utilizan para agregar o quitar clases CSS de un elemento seleccionado.
// Agregar una clase a un elemento
$('#miElemento').addClass('miNuevaClase');

// Quitar una clase de un elemento
$('#miElemento').removeClass('miClaseExistente');

//`.on()`: Se utiliza para vincular eventos a elementos seleccionados. Puedes especificar el tipo de evento (por ejemplo, "click" o "change") y una función que se ejecutará cuando ocurra el evento.

// Vincular un evento 'click' a un elemento
$('#miElemento').on('click', function() {
    // Hacer algo cuando se hace clic en el elemento
});

```

El objeto que engloba el DOM, es el HTML. 

