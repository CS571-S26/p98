import { Image, Stack } from "react-bootstrap";

function ArticleLayout({ title, author, imageAlt, imageSrc, children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack
        className="p-3"
        style={{
          maxWidth: "1000px",
        }}
      >
        <Image
          src={imageSrc}
          rounded
          width="100%"
          height="300px"
          style={{ objectFit: "cover" }}
          alt={imageAlt}
        />
        <h1 className="pt-3">{title}</h1>
        <p className="pb-3" style={{ color: "#495057" }}>
          By {author}
        </p>
        {children}
      </Stack>
    </div>
  );
}

export default ArticleLayout;
