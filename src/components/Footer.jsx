import React from 'react';

function Footer(){
    return (
        <section className='relative z-10 flex items-center justify-center w-full h-16 gap-1 text-sm top-20 bg-neutral-800 text-slate-50'>
            <h1>Ryde,</h1>
            <div>Copyright {new Date().getFullYear()}.</div>
        </section>
    )
}

export default Footer;