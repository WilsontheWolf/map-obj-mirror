/**
 * This returns an object which is mirrored.
 * @param {Map} map - This is the map (or something extending map) to use for the object.
 * @returns {object} object - The object with your map objects in them.
 * @example
 * // This example uses Enmap (which should behave the same as another Map).
 * 
 * // require the things
 * const Enmap = require('enmap')
 * const mapObj = require('map-to-obj')
 * 
 * // We make our enmap and the object.
 * const db = new Enmap('name');
 * const obj = mapObj(db);
 * 
 * // usage
 * 
 * db.get('e') // returns undefined
 * db.set('e', 'eee') // e = 'eee'
 * obj.e // returns 'eee'
 * obj.e = 'hello world' // e = 'hello world'
 * db.get('e') // returns 'hello world'
 * 
 */
module.exports = (map) => {
    if (!(map instanceof Map)) throw new Error('The passed value must be a map!');
    return new Proxy({}, {
        set: (obj, prop, value) => map.set(prop, value),
        get: (obj, prop) => map.get(prop)
    });
};