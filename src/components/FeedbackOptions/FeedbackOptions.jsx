import {
  ButtonElementStyle,
  WrapElementStyle,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapElementStyle>
      {options.map((name, i) => {
        return (
          <ButtonElementStyle
            key={i + 1}
            className=""
            onClick={() => {
              onLeaveFeedback(name);
            }}
          >
            {name}
          </ButtonElementStyle>
        );
      })}
    </WrapElementStyle>
  );
};

export default FeedbackOptions;
