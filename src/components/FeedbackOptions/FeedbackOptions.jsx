import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (

    <>
        <List>
            {Object.keys(options).map(key =>
                <li key={key}><Button name={key} onClick={(e) =>
                    onLeaveFeedback(e)}>{key}</Button>
                </li>)
            }
        </List>
    </>
)

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;