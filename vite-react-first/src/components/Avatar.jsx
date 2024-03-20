export default function Avatar({person, size=200}) {
    return(
     <img
        className="avatar"
        src={person.imgUrl}
        alt={person.name}
        width={size}
        height={size}
     />
    );
}


