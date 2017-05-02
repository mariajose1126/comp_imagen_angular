/**
 * @ngdoc directive
 * @name imagen.component:imagenComponent
 * @description
 * Componente especificado para desplegar imágenes
 * @param {string} imagen Recibe un string especificando
 * la ruta de la imagen deseada
 */

'use strict';

angular.module('imagen', [])

.component('imagenComponent', {
	templateUrl: './src/imagen-view.html',
	controller: '',
	bindings: {
		imagen: '@',
	},
});
