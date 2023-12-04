import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.jpeg";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (onSearch: string) => void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack  padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar