function Food(){
    const f1='Orange'
    const f2='Apple'
    return(
        <ul>
            <li>Mango</li>
            <li>{f1}</li>
            <li>{f2.toUpperCase()}</li>
        </ul>
    );
}
export default Food