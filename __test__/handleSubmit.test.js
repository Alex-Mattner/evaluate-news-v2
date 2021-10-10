import {handleSubmit} from '../src/client/js/formHandler';
import {writeResponse} from '../src/client/js/formHandler';


test('Testing function handleSubmit from formHandler.js', () => {
    expect(handleSubmit).toBeDefined();
});

test('Testing function writeResponse from fomrHandler.js', () => {
    expect(writeResponse).toBeDefined();
})