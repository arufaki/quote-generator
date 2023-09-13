import Section from "../../Elements/Section";
import Text from "../../Elements/Paragraph";
import "./Quote.css";
import { useAppStore } from "../../../state-management/app-store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import Heading from "../../Elements/Heading";

export default function Quote() {
  const [quote, getQuotes, quoteByAuthor, clicked] = useAppStore(
    (state) => [
      state.quote,
      state.getQuotes,
      state.quoteByAuthor,
      state.clicked,
    ],
    shallow
  );

  useEffect(() => {
    try {
      getQuotes();
    } catch (error) {
      console.log("status : ", error);
    }
  }, []);

  const filterQuote = quoteByAuthor.filter(
    (quotes) => quotes.quoteText !== quote.quoteText
  );

  const currentQuote = filterQuote.map((quote) => (
    <div className="quote-wrap" key={quote._id}>
      <Text className="quote-text quote-gap" key={quote._id}>
        {quote.quoteText}
      </Text>
    </div>
  ));

  return (
    <Section className="quote-master">
      {clicked ? (
        <Heading
          className="author-name"
          onClick={() => useAppStore.setState({ clicked: false })}
        >
          {quote.quoteAuthor}
        </Heading>
      ) : null}
      <div className="quote-wrap">
        <Text className="quote-text">{quote.quoteText}</Text>
      </div>
      {clicked ? currentQuote : null}
    </Section>
  );
}
