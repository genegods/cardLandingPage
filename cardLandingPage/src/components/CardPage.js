import React from 'react'
import {CardData} from '../data/CardData'

const CardPage = () => {
  return (
    <React.Fragment>
    <section>
      <div>
        {
             CardData.map((item, index) => {
                return(
                    <div key={index}>
                        <div className="w-96 h-60 mx-auto px-5 mt-5 shadow-md centered flex-col bg-white">
                            <div className="text-4xl w-16 h-16 centered bgColor rounded-full">
                                <span>{item.icon}</span>
                            </div>
                            <p className='text-2xl font-semibold'>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
                    </div>
                )
             })
        }
      </div>
    </section>
  </React.Fragment>
  )
}

export default CardPage