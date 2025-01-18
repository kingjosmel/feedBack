import Card from "./Shared/Card";
import Button from './Button';
import { useState } from "react";

const FeedbackItem = ({ item }) => {
  const [reverse, setReverse] = useState(false)
  return (
    <Card reverse= {reverse}>
      <div className="num-display">{item.rating}</div>

      <div className="text-display"> {item.text}</div>
      <Button setReverse={setReverse} reverse={reverse}/>
      
    </Card>
  );
};

export default FeedbackItem;
