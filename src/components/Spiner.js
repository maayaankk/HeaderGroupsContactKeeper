import React, { Fragment } from 'react'

function Spinner() {
    return (
        <Fragment>
            <img
                src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
                alt='Loading...'
                style={{ width: '200px', margin: 'auto', display: 'block' }}
            />
        </Fragment>
    )
}

export default Spinner