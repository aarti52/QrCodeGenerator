import React from 'react'
import QRCode from 'react-qr-code';
function QR(props) {
  return (
    <div>
        {console.log({props})}
      <QRCode  className='h-10 w-10 m-auto md:h-20 md:w-20'
      value={props.makeurl?props.makeurl:''}/>
    </div>
  )
}

export default QR
