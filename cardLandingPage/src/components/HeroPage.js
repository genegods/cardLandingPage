import React from 'react'
import TitlePage from './TitlePage'

const HeroPage = () => {
  return (
    <React.Fragment>
    <section>
        {/* heroPage */}
      <div className="wrapper">
        
      </div>

      {/* titlePage */}
      <div className="bgColor md:grid md:grid-cols-3">
        <div></div>
        <div className="col-span-2">
            <TitlePage/>
        </div>
      </div>

    </section>
  </React.Fragment>
  )
}

export default HeroPage