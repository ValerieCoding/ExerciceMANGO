import Button from "./Button"

const Footer = ({onAdd, showAddItem, isAuthentified}) => {
    return (
        <footer>
            <Button color={showAddItem ? 'red':'green'} 
            text={showAddItem ? 'Close':'Add'}
            onClick={onAdd}></Button>
        </footer>
    )
}

export default Footer
