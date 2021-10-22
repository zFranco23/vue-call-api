import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Pruebas en Counter.vue', () => {

    // test('Debe de hacer match con el snapshot', () => {
        
    //     const wrapper = shallowMount( Counter);
    //     expect( wrapper.html() ).toMatchSnapshot();
    // })
    let wrapper = shallowMount( Counter);;
    
    beforeEach(() => {
        wrapper = shallowMount( Counter);
    })
    

    test('Debe de tener el valor por defecto "Counter"', () => {
        
        const h2 = wrapper.find('h2');
        expect( h2.exists ).toBeTruthy(  );
        expect( h2.text() ).toBe( 'Counter' );
    })

    test('Debe de tener 100 el p como valor por defecto', () => {

        // const paragraph = wrapper.findAll('p');
        const paragraph = wrapper.find('[data-testid="counter"]');

        expect( paragraph.text() ).toBe("100");
        
    })

    test('Debe de incrementar y decrementar en 1 el valor del contador', async () => {
        
        const [buttonIncrease , buttonDecrease] = wrapper.findAll('button');
        
        //Esperar que se rerenderize el DOM virtual
        await buttonIncrease.trigger('click');
        await buttonIncrease.trigger('click');
        await buttonIncrease.trigger('click');
        await buttonDecrease.trigger('click');
        await buttonDecrease.trigger('click');
        
        const paragraph = wrapper.find('[data-testid="counter"]');
        expect( paragraph.text() ).toBe("101");

    })


    test('Debe de establecer el valor por defecto', () => {
        
        const { start } = wrapper.props();

        const paragraph = wrapper.find('[data-testid="counter"]');

        expect(Number(paragraph.text())).toBe(start);

    })

    test('Debe de mostrar la property title', () => {

        const wrapper = shallowMount( Counter , {
            props : {
                title : 'Nuevo titulo',
                // start : '5',
            }
        } );

        expect(wrapper.find('h2').text().trim()).toBe('Nuevo titulo')

    })
    
    

    
    
    
})
