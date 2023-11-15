import React from 'react'

const Container = ({children}) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-24">{children}</div>
  );
}

export default Container