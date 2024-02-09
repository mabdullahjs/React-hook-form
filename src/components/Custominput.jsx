import React from 'react'

const Custominput = ({ label, register, required }) => {
    return (
        <>
            <input placeholder={label} {...register(label, { required })} />
        </>
    )
}

export default Custominput