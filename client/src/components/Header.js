const Header = ({slogan, storename}) => {
    return (
      <div>
          <h1>{storename}</h1>
          <h2>Don't forget to {slogan}</h2>
      </div>
    )
  }
  
  export default Header