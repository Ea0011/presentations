const fn = (func) => {
  //initialize mock property for the mocked function
  mockedFunc.mock = {
    calls: [],
    results: [],
    instances: [],
  };

  // reset all the trackers for the function
  mockedFunc.resetMocks = () => {
    mockedFunc.mock.calls = [];
    mockedFunc.mock.results = [];
    mockedFunc.mock.instances = [];
  };

  // override bind function to avoid lost of mock property when bidning
  mockedFunc.bind = (context) => {
    const mockedProps = mockedFunc.mock;
    const boundFunc = (...params) => mockedFunc.apply(context, params);

    boundFunc.mock = mockedProps;
    return boundFunc;
  };

  // mocked function used for testing
  function mockedFunc(...params) {
    let asConstructor = false;
    
    // check if the mocked function is called with "new"
    if(new.target) {
      asConstructor = true;
    }

    switch(asConstructor) {
      case true:
        const createdObject = new func(...params);
        mockedFunc.mock.instances = [ ...mockedFunc.mock.instances, { ...createdObject } ];

        return createdObject;
      case false:
        const result = func(...params);
        mockedFunc.mock.calls = [ ...mockedFunc.mock.calls, [ ...params ] ];
        mockedFunc.mock.results = [ ...mockedFunc.mock.results, result ];

        return result;
    }
  };

  return mockedFunc;
};

module.exports = fn;
