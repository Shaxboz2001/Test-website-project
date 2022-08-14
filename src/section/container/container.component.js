import React from 'react'
import CategoryBox from '../category/category.component'
import { ContainerSection } from './container.style'

const TestContainer = () => {
  return (
    <ContainerSection className='col-12'>
        <CategoryBox questionNumber = {[10,15,20,25,30]} />
    </ContainerSection>
  )
}

export default TestContainer