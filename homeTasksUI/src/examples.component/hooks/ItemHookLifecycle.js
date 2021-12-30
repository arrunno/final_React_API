import {useEffect, useState} from "react";


export default ({timeout}) => {
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        console.log("Mounting/idedamas");

        setTimeout(() => {
            setLoading(false);
        }, timeout );



        return () => {
            console.log("atnaujinimas, unmoutinimas");
        }
    })

return (
    <>
        {
            loading && <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status"><span className="visually-hidden"></span>
                </div>
            </div>
        }
        {
            !loading && <div>Duomenuys uzkrauti!!!</div>
        }
    </>

);

}