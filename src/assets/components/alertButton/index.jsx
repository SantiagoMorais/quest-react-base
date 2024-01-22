import './index.css'

const AlertButton = ({ label }) => {
    return <button
        onClick={() => alert(`A label desse botão é "${label}"`)}>
        {label}
    </button>
}

AlertButton.defaultProps = {
    label: 'Clique Aqui',
}

export default AlertButton