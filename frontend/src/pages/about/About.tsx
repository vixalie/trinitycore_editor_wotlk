import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes["container"]}>
      <section className={classes["title-container"]}>
        <h1>TrinityCore Data Editor</h1>
        <h4>World of Warcraft: Wrath of the Lich King</h4>
      </section>
    </div>
  );
}
