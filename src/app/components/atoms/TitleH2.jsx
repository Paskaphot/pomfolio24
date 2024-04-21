export default function TitleH2({ text, colorVar }) {
    return (
        <h2 className={`text-6xl text-${colorVar}`}>{text}</h2>
    );
}