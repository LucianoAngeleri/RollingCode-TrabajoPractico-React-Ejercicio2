const Titulo = ({textoTitulo}) => {
    return (
        <section className='cotainer p-5 text-bg-primary rounded-5 border'>
            <h1 className="display-1 text-center">Hello {textoTitulo}!</h1>
        </section>
    );
};

export default Titulo;