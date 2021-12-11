import React from 'react'

const Main = () => {
    return (
        <div>
            <h3>Hello CI/CD pipeline</h3>
            {process.env && <p>{process.env}</p>}
        </div>
    )
}

export default Main;