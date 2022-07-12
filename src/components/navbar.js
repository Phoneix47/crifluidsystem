import logo from '../img/logo.png';
import useWindowSize from '@rooks/use-window-size';

const Navbar = () => {
  const { innerWidth } = useWindowSize();
  console.log(innerWidth);
  return (
    <div
      style={{
        alignContent: 'center',
        marginTop: '-10px',
        width: '100%',
      }}
    >
      <img src={logo} width={innerWidth / 2 + 20} />;
    </div>
  );
};

export default Navbar;
