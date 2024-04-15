import React from 'react'

interface ErrorProps {
    error: String | undefined
}

const Error = ({ error }: ErrorProps): JSX.Element => {
    return (
        <div className=''>
            <p className='font-medium text-lg'>
                {error}
            </p>
        </div>
    )
}

export default Error
