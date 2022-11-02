import useCustomCounter from "../customHook/customHook";
function Sub(){
    const count = useCustomCounter(-1)
    return (
        <div>
            <h1>Subtract</h1>
            <span>
                {count}
            </span>
        </div>
    );
}

export default Sub;