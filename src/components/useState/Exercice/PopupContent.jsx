import React from 'react'

function PopupContent() {
  return <section>
    {copied && (
        <div style={{position: 'absolute', bottom:"3rem"}}>
            Copied to Clipboard
        </div>
    )}
  </section>
}

export default PopupContent