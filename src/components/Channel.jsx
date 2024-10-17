export function Channel({number, image, name}){
    return(
        <div className="row">
            <p className='channel-number col-2 m-auto'>{number}</p>
            <img className='channel-img img-fluid col-10 m-auto' src={image} alt={`Logotipo de ` + name}/>
        </div>
    )
}

