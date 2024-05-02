export const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;

  return (
    <>
      <div>
        {options.map((option) => (
          <button
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
