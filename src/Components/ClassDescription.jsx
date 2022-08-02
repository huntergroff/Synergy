import React from 'react'

const ClassDescription = ({ descriptionItem, index }) => {
  return (
    <div className='class-description-container' key={index}>
        <div className='banner-img'>
            {descriptionItem.categoryImg}
        </div>
        <div className='body container'>
            <div className='header'>
                <h2>{descriptionItem.categoryTitle}</h2>
                <p>{descriptionItem.categoryBlurb}</p>
            </div>
            {descriptionItem.classes.map((classItem, index) => {
                return (
                    <div className='description' key='index'>
                        <div className='title-and-age'>
                            <h3>{classItem.title}</h3>
                            <h4>{classItem.age}</h4>
                        </div>
                        <p>{classItem.blurb}</p>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default ClassDescription