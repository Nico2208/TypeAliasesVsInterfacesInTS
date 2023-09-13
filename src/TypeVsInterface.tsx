//Interface can only describe an object while the types can describe an object but also anything else.

type Address = string; //Type alias of string just like in haskell.
const address: Address = "123 calle falsa";

//----------------------------

//Type alias can also describe union types - interface cannot.

type Address2 = string | number; //In this case Address2 is a type alias for a string OR a number.

type Address3 = string | string[];

//--------------------------------
//type alias can easily use utility types - interface too but only with ugly syntax.

type UserProps = {
    name: string,
    age: number,
    createdAt: Date;
}

type GuestProps = Omit<UserProps, "createdAt">; //This alias type describes an object with a name and an age. Omit<Type, typeFieldWeWantToOmit>

interface IGuestProps extends Omit<IUserProps, "name"|"age"> {} //Totally ugly

//--------------------------------
//Type alias can easily describe tuples.

type TAddress = [number, string];

const address2 : TAddress = [123, "Calle Falsa"];

interface TAdress2 extends Array<number | string> {
    0: number;
    1: string;
} //We can achieve the same tuple with interfaces, but type aliases have a much cleaner syntax.

//-------------------------------
// Extracting type from something else.

const project = {
    title: "Project 1",
    specification: {
        areaSize: 100,
        rooms: 3,
    }, //we can add as const right at the end of this curly brackets just to send areaSize with the value 100 and rooms 3 (read only variables)
}

type Specification = typeof project["specification"];  //We want to create a type out of the specification from project object.

//-----------------------------
//Interfaces can be merged 
//Interfaces are open and type aliases are closed.

interface User {
    name: string,
    age: number,
}

interface User {
    role: string,
}

//Use case of this situation: we get certain info from an endpoint that is incomplete. We can redeclare the interface to add the info we want to add.

//We can't redeclare type aliases. 


//------------------------------
//Example of Type vs Interface:

type TUserProps = { //We add a T at the begining of our type.
    name: string,
    age: number
}

interface IUserProps {
    name: string,
    age: number
}


//------------------------------------------------

// "Extending"

type TUserProps2 = {
    name: string,
    age: number
}

type TAdminProps = TUserProps2 & {
    role: string
} //This how intersection is done when using types.

interface IAdminProps extends TUserProps {
    role: string,
} //Extending using interface.



//-----------------------------------

export default function TypeInterface ({}: TUserProps) {
    return <div>Card.</div>
}