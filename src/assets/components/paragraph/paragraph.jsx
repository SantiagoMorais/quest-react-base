import './paragraph.css'

const Text = ({ setBackgroundColor, setLetterSize, text, setTextColor }) => {
    return <p
        className="text"
        style={{ textTransform: setLetterSize, 
                 backgroundColor: setBackgroundColor,
                 color: setTextColor }}>
        {text}
    </p>
}

Text.defaultProps = {
    setLetterSize: 'uppercase',
    setBackgroundColor: 'cornflowerblue'
}

export default Text