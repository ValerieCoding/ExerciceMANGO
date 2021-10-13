import { Link } from "react-router-dom"
import Button from "./Button"


const Footer = ({onAdd, showAddItem}) => {
    return (
        <footer>
            <Button color={showAddItem ? 'red':'green'} 
            text={showAddItem ? 'Close':'Add'}
            onClick={onAdd}></Button>
            <p></p>
            <Link to='/'>Disconnect</Link>
        </footer>
    )
}

export default Footer
