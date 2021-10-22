import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision';

describe('Pruebas en Indecision.vue', () => {
    
    let wrapper = shallowMount( Indecision );
    //Spy , estar pendiente de cualquier suceo
    //Metodos , librerias , llamados a una implementacion de un metodo , etc
    let clogSpy;

    global.fetch = jest.fn( () => Promise.resolve({
        json : () => Promise.resolve({
                answer: "no",
                forced: false,
                image: "https://yesno.wtf/assets/no/19-2062f4c91189b1f88a9e809c10a5b0f0.gif"
            })
    }) );

    beforeEach( () => {
        wrapper = shallowMount( Indecision );
        //En el Spy , va el objeto que deseas percatarte , seguido del metodo de este 
        clogSpy = jest.spyOn( console , 'log' );

        
        jest.clearAllMocks();
    })

    test('Debe de hacer match con el snapshot', () => {
        
        expect(wrapper.html()).toMatchSnapshot();
    })


    test('Escribir en el input no debe de disparar nada , (console.log)', async () => {

        //Debo apuntar a la instancia de vue propiamente
        const getAnswerSpy = jest.spyOn( wrapper.vm , 'getAnswer' )

        const input = wrapper.find('input');

        //Manejar el change
        await input.setValue('Hola mundo'); //Alguna modificacion en el DOM require re renderizado , debemos esperar
        expect(clogSpy).toHaveBeenCalled();
        expect(clogSpy).toHaveBeenCalledWith( { value : 'Hola mundo'});

        expect(getAnswerSpy).toHaveBeenCalledTimes(0);

        // console.log(wrapper.vm);
    })

    test('Escribir simbolo de interrogacion debe llamar al getAnswer', async () => {
        const getAnswerSpy = jest.spyOn( wrapper.vm , 'getAnswer' );

        const input = wrapper.find('input');
        await input.setValue("Seré millonario?");

        expect(getAnswerSpy).toHaveBeenCalled();
    })

    test('Pruebas en getanswer', async () => {
        //Llamarlo realmente

        await wrapper.vm.getAnswer();

        //wrapper.vm.$data.answer === wrapper.vm.answer

        expect(wrapper.find('img').exists()).toBeTruthy();
        expect(wrapper.vm.$data.answer).toBe('No!');
        expect(wrapper.vm.$data.image).toBe('https://yesno.wtf/assets/no/19-2062f4c91189b1f88a9e809c10a5b0f0.gif');

    })

    test('Pruebas en getanswer - fallos en API', async () => {

        fetch.mockImplementation( () => Promise.reject('API is down'));

        await wrapper.vm.getAnswer();
        const img = wrapper.find('img');

        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('No se puede cargar del API');
    })
    
})
