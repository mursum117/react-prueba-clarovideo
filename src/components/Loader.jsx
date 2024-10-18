import '../css/loader.css'

export function Loader(){
    return(
        <div className='container-loader'>
            <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
