import './index.css'
import AlertButton from '../alertButton/index.jsx'

const buttonsLabel = [undefined, 'Clique Aqui também', 'Clique só mais uma vez']

const Buttons = () => {
    return (
        <div className="buttons">
            { buttonsLabel.map((label, index) =>
                <AlertButton
                    key={index}
                    label={label}
                    labelContent={label}
                />
            )}
        </div>
    )
}

export default Buttons
