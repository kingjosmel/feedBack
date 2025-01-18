import Card from "./Shared/Card";
import Button from './Button';
const FeedbackItem = ({ item }) => {
  return (
    <Card reverse= {true}>
      <div className="num-display">{item.rating}</div>

      <div className="text-display"> {item.text}</div>
      <Button />
      
    </Card>
  );
};

export default FeedbackItem;
