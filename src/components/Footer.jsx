import githubLogo from '../images/github-mark.png'
const Footer = () => {
  return (
    <footer className='pb-5'>
      <a href='https://github.com/amherro' className='flex justify-center items-center'>
        <img src={githubLogo} alt="GitHub Logo" className='github-logo' />
        <p className='m-2 ml-5'>Adam Herro 2023</p>
      </a>
    </footer>
  )
}

export default Footer