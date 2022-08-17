import { Button, Row, Col } from "antd";
import errImg from "@/assets/404.png";
import { useNavigate } from "react-router-dom";
import "./index.scss"
const NotFound = () => {
    const navigate = useNavigate();
    return (
      <main className="not-found">
        <Row>
          <Col span={12}>
            <img src={errImg} alt="404" />
          </Col>
          <Col span={12} className="right">
            <h1>404</h1>
            <h2>抱歉，你访问的页面不存在</h2>
            <div>
              <Button type="primary" onClick={() => navigate(-1)}>返回</Button>
            </div>
          </Col>
        </Row>
      </main>
    );
  }

export default NotFound