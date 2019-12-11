import React from 'react'
import LoaderSpinner from 'react-loader-spinner'


export const Loader = (_ =>
    <div className="key spinner">
        <LoaderSpinner type="Puff" color="#204963" height="60" width="60" />
        <p>Loading Data</p>
    </div>
)   
