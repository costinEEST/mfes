export default function Root(props) {
  return (
    <section
      style={{
        padding: "1rem",
        backgroundColor: "cyan",
      }}
    >
      The <i>{props.name}</i> React micro frontend is mounted!
    </section>
  );
}
