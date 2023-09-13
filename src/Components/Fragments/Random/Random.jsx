import { useAppStore } from "../../../state-management/app-store";
import Button from "../../Elements/Button";
import Heading from "../../Elements/Heading";
import "./Random.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function Random() {
  const getQuotes = useAppStore((state) => state.getQuotes);

  const handleClick = () => {
    getQuotes();
    useAppStore.setState({ clicked: false });
  };

  return (
    <Button className="random-master" onClick={handleClick}>
      <Heading className="heading-title">random</Heading>
      <AutorenewIcon className="autorenew" />
    </Button>
  );
}
