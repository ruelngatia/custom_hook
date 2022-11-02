import useCustomCounter from "../customHook/customHook";
function Add(){
    const count = useCustomCounter(1)
    return (
        <div>
            <h1>Adding</h1>
            <span>
                {count}
            </span>
        </div>
    );
}

export default Add;