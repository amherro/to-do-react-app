import githubLogo from '../images/github-mark.png'
const Footer = () => {
  return (
    <footer className='mt-3 pb-3'>
      <a href='https://github.com/amherro' className='flex justify-center items-center'>
        <img src={githubLogo} alt="GitHub Logo" className='github-logo' />
        <p className='ml-7'>Adam Herro 2023</p>
      </a>
    </footer>
  )
}

export default Footer