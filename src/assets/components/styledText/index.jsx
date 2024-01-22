import './index.css'

const StyledText = ({ setBackgroundColor, setLetterSize, text, setTextColor }) => {
    return <p
        className="text"
        style={{ textTransform: setLetterSize, 
                 backgroundColor: setBackgroundColor,
                 color: setTextColor }}>
        {text}
    </p>
}

StyledText.defaultProps = {
    setLetterSize: 'uppercase',
    setBackgroundColor: 'cornflowerblue'
}

export default StyledText