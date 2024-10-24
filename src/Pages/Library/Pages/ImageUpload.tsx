import { ContentBlock, InputImageUpload } from 'Shared/Components'

const ImageUpload = () => {
  return (
    <>
      <ContentBlock title='Insira as fotos do produto' helpPage="/teste">
        <div>
          <InputImageUpload max={5}/>
        </div>
      </ContentBlock>
    </>
  )
}

export default ImageUpload