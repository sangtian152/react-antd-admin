import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>你来到了没有知识的荒原</h2>
        <Button onClick={() => navigate(-1)}>返回</Button>
      </main>
    );
  }

export default NotFound