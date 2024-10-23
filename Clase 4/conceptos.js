//Destructuring

const frutas =['manzanas','peras','frutillas','sandia'];

const[fruta1, fruta2, fruta3, fruta4] = frutas;

console.log(fruta1); 
console.log(fruta2);
console.log(fruta3);
console.log(fruta4);

const persona ={
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Buenos Aires'
};

const {nombre, edad, ciudad} = persona;

console.log(nombre);
console.log(edad);
console.log(ciudad);


function mostrarPersona({nombre, edad, ciudad}){
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);
}

mostrarPersona(persona);

// spread

//arrays
const array1=[1,2,3,4,5,6,7];
const array2=[...array1,8,9,10,11,12,13,14];
console.log(array2);

//objetos
const objeto1 ={a:1, b:2};
const objeto2 ={ c:3, d:4};
const objeto3 ={...objeto1,...objeto2 };
console.log(objeto3);

// funcion
const nums=[1,2,3];
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...nums)); //6

//set

const set =new Set([1,3,3,4,4,6]);
console.log(set);

//MAP

const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1'));
console.log(map.has('key2'));
map.delete('key2');
console.log(map.size); //2