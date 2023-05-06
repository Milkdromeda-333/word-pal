import Meaning from './Meaning';

export default function Word(props) {
  return (
    <section className="word">
      <div className="word__definitions">
        {props.meanings.map((def) => (
          <Meaning {...def} key={def.definitions[0].definition} />
        ))}
      </div>
    </section>
  );
}
