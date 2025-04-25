import PropTypes, { number } from "prop-types"

import { Title } from "./Title"

export const NewsMessage = ({ text, style, number }) => {
    return (
        <>
            <Title />
            <p
                className={style}
            >
                {text} {number + 3}
            </p>
        </>
    )
}

NewsMessage.propTypes = {
    text: PropTypes.string,
    number: PropTypes.number.isRequired,
    style: PropTypes.string
}