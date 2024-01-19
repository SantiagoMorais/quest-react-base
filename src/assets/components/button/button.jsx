import './button.css'

const Button = ({ label, labelContent }) => {
    return <button
        onClick={() => labelContent(label)}>
        {label}
    </button>
}

Button.defaultProps = {
    label: 'Clique Aqui',
}

export default Button