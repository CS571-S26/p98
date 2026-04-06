import { Image, Stack } from "react-bootstrap";

function ArticleLayout({ title, author, imageSrc, children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack
        className="p-3"
        style={{
          maxWidth: "1000px",
        }}
      >
        <Image src={imageSrc} rounded width="100%" height="300px" style={{ objectFit: "cover" }} />
        <h1 className="pt-3">{title}</h1>
        <h2 className="fs-5 pb-4">By {author}</h2>
        {children}
      </Stack>
    </div>
  )
}

export default ArticleLayout;