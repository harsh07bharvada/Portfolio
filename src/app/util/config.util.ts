/**
 * 
 * @param state 
 * @param classes 
 */
export const addClassToObject = (state: object, classes: Array<string>) => {
    if(classes.length > 0){
        state[classes.join(' ')] = true;
    }
}