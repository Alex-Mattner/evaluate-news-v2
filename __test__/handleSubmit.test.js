//const { handleSubmit } = require("../src/client/js/formHandler");

import {handleSubmit} from '../src/client/js/formHandler';


test('Testing function handleSubmit from formHandler.js', done => {
    expect(handleSubmit).toBeDefined();
});

