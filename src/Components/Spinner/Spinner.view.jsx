import React from 'react'

const Spinner = (props) => {
  return (
    <>
        {
                props.isLoading && (
                    <div className="spinner-border me-2 spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
    </>
  )
}

export default Spinner