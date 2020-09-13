# Map Obj Sync
Convert JS Maps (and Enmaps) to objects and keep them synced.

# Installation

Just install through your node package manager of choice
```bash
npm install map-obj-sync
# or
yarn add map-obj-sync
```
# Usage
```js
 // This example uses Enmap (which should behave the same as another Map).
 
 // require the things
 const Enmap = require('enmap')
 const mapObj = require('map-obj-sync')
 
 // We make our enmap and the object.
 const db = new Enmap('name');
 const obj = mapObj(db);
 
 // usage
 
 db.get('e') // returns undefined
 db.set('e', 'eee') // e = 'eee'
 obj.e // returns 'eee'
 obj.e = 'hello world' // e = 'hello world'
 db.get('e') // returns 'hello world'
 ```