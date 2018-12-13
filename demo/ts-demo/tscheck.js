// ts check with jsdoc
// @ts-check // activate typescript type checker


/**
 *
 *
 * @param {string} s input str
 * @returns {string}
 */
function toLower(s) {
    return s.toLowerCase();
}

// toLower(55); // error: argument must be string

/**
 * @type {Object.<string, {name:string}>}
 */
const userDict = {};

userDict['user1'] = {name:'张三'};

// userDict['user2'] = '李四'; // error: Type '"李四"' is not assignable to type '{ name: string; }'.