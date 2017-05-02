describe('El componente imagen', function() {
  beforeEach(module('imagen'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));

it('debería desplegar una imagen', function() {
     bindings = {imagen: 'src/img/img_test.jpg'};
     ctrl = $componentController('imagenComponent', null, bindings);
    expect(ctrl.imagen).toBe('src/img/img_test.jpg');
  });
});
