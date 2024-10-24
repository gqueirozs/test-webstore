import './InfoTag.scss'

const FloatingTag = ({ label }:{ label:string }) => {
  return (
    <div className='InfoTag'>{label}</div>
  )
}

export default FloatingTag