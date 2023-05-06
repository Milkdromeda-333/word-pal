export default function Meaning(props) {
  return (
    <div className="meaning">
      <h2 className="meaning__partOfSpeech">{props.partOfSpeech}</h2>
      <p className="meaning__definition">{props.definitions[0].definition}</p>
      {props.definitions[0].definition.example && (
        <p>Example: "{props.definitions[0].definition.example}"</p>
      )}
      {props.synonyms.length > 0 && (
        <ul className="meaning__synonyms">
          Synonyms
          {props.synonyms.map((word) => (
            <li>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
