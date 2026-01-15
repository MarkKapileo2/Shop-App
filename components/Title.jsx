import React from 'react'

function Title({title1, title2, titleStyles, title1Styles, paraStyles, para}) {
  return (
    <div>
        <div className={`${titleStyles}`}>
            <h3 className={`${title1Styles}`}>
                {title1}
                <span className='text-destructive font-light! underline'> {title2}</span>
            </h3>
            <p className={`${paraStyles} max-w-md`}>
                {para ? para : "Explore our collection of stylish clothing and footwear"}
            </p>
        </div>
    </div>
  )
}

export default Title