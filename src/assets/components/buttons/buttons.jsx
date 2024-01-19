import './buttons.css'
import Button from '../button/button.jsx'

const showLabelContent = (labelContent) => {
    alert(`A label desse botão é "${labelContent}"`)
}

const buttonsLabel = [undefined, 'Clique Aqui também', 'Clique só mais uma vez']

const Buttons = () => {
    return (
        <div className="buttons">
            { buttonsLabel.map((label, index) =>
                <Button
                    key={index}
                    label={label}
                    labelContent={showLabelContent}
                />
            )}
        </div>
    )
}

export default Buttons
