function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-4">
      <h1 className="mb-2">{title}</h1>
      {subtitle && <p style={{ color: "#495057" }}>{subtitle}</p>}
    </header>
  );
}

export default PageHeader;
