import React from 'react'

export default function Result({results}) {
  return (
    <div>
        {
            results.map((result)=>(
                <div>
                    <h2>{result.title}</h2>
                </div>
            ))
        }
    </div>
  )
}
