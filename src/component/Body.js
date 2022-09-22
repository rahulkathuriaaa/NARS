import React from 'react'
// import photo from '../img/body.jpg'

const Body = () => {
  return (
    <section>

      <div className=" inline-block" style={{ width: '60%', padding: '20px 0 20px 100px' }} >
        <h1 style={{ textAlign: 'left', fontSize: '87px', color: 'white', fontFamily: 'Quicksand', fontWeight: '700', margin: '13px 95px 0px 0px' }}>Powerful for developers. Fast for everyone.</h1>
        <section>
          <div style={{ margin: '48px 0  20px -45px' }}>
            <button type="button" className="btn btn-success mx-5" >Start Building</button>
            <button type="button" className="btn btn-success " >Read Documentation</button>
          </div>
          <h1 style={{ color: 'white', margin: '39px 160px 0 -1px' }}>TECH-MACHIN is a decentralized blockchain built to enable scalable, user-friendly apps for the world.</h1>
        </section>
      </div>

    </section>
  )
}

export default Body
