import React from 'react'

const Main = () => {
    return (
        <div>
            <h3>Hello CI/CD pipeline</h3>
            {process.env.REACT_APP_API_KEY && <p>{process.env.REACT_APP_API_KEY}</p>}
        </div>
    )
}

export default Main;