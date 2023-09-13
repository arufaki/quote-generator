import Section from "../../Elements/Section";
import Heading from "../../Elements/Heading";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Author.css";
import Label from "../../Elements/Label";
import { useAppStore } from "../../../state-management/app-store";
import { shallow } from "zustand/shallow";

export default function Author() {
  const [quote, getQuoteByAuthor, clicked, toggleClicked] = useAppStore(
    (state) => [
      state.quote,
      state.getQuoteByAuthor,
      state.clicked,
      state.toggleClicked,
    ],
    shallow
  );

  const handleClick = () => {
    getQuoteByAuthor(quote.quoteAuthor);
    toggleClicked();
  };

  return (
    <Section className="author-master" onClick={handleClick}>
      {clicked ? null : (
        <div className="author-wrap">
          <div className="author-title">
            <Heading className="authorName">{quote.quoteAuthor}</Heading>
            <Label className="genre">{quote.quoteGenre}</Label>
          </div>
          <ArrowForwardIcon className="arrow" fontSize="large" />
        </div>
      )}
    </Section>
  );
}
