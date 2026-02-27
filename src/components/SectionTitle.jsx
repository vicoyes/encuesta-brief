function SectionTitle({ title, objective }) {
  return (
    <div className="section-title">
      <h2 className="section-title__heading">{title}</h2>
      {objective && <p className="section-title__objective">{objective}</p>}
    </div>
  )
}

export default SectionTitle
