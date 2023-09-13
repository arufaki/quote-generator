import Author from "../Components/Fragments/Author/Author";
import Copyright from "../Components/Fragments/Copyright/Copyright";
import Quote from "../Components/Fragments/Quote/Quote";
import Random from "../Components/Fragments/Random/Random";
import { Header, Main, Footer } from "../Components/Layouts/Layouts";

export default function QuotePage() {
  return (
    <>
      <Header>
        <Random />
      </Header>
      <Main>
        <Quote />
        <Author />
      </Main>
      <Footer>
        <Copyright />
      </Footer>
    </>
  );
}
