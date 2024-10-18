export function Channel({number, image, name}){
    return(
        <div className='row'>
            <p className='channel-number col-0 col-lg-2 m-auto d-none d-lg-block'>{number}</p>
            <img className='img-fluid col-12 col-lg-10 m-auto' src={image} alt={`Logotipo de ` + name}/>
        </div>
    )
}

