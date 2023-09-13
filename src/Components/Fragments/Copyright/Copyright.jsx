import Link from "../../Elements/Link";
import Text from "../../Elements/Paragraph";
import "./Copyright.css";

export default function Copyright() {
  return (
    <Text className="text-wrap">
      created by{" "}
      <Link
        href="https://github.com/arufaki"
        target="_blank"
        className="copyright"
      >
        Arufaki
      </Link>
      - devChallenges.io
    </Text>
  );
}
