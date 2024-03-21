export default function Item({name, isPacked}){

    return (
        <li>
           {name} { isPacked && '√' }
        </li>
    );
}