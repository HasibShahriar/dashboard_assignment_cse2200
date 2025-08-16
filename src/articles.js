import { Table, Badge, Pagination } from "react-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Articles() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 3;

  const articles = [
    { title: "Hello World! and its usage in programming world - A comprehensive overview", status: "Published", lastEdited: "09-02-2022" },
    { title: "Algorithms: a pathway to understanding the physical world", status: "Under Review", lastEdited: "12-01-2023" },
    { title: "AI and its future applications in the field of Material Science", status: "Draft", lastEdited: "22-03-2023" },
    { title: "Human rights and its relation with the rapid growth of communication technology", status: "Published", lastEdited: "24-03-2023" },
    { title: "Using R as a tool for Data Manipulation: A comprehensive overview", status: "Under Review", lastEdited: "27-10-2023" },
    { title: "Kruskal's algorithm and its effectiveness in Data Science", status: "Draft", lastEdited: "01-01-2024" },
    { title: "Linux Kernel: How it is related to privacy in the current data communication infrastructure", status: "Published", lastEdited: "28-01-2025" }
  ];

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  const getBadgeVariant = (status) => {
    switch (status) {
      case "Published": return "success";
      case "Under Review": return "warning";
      case "Draft": return "info";
      default: return "secondary";
    }
  };

  const handlePageChange = (page) => {
    navigate(`/articles?page=${page}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Articles</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {paginatedArticles.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>
                <Badge bg={getBadgeVariant(article.status)}>
                  {article.status}
                </Badge>
              </td>
              <td>{article.lastEdited}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>
  );
}
