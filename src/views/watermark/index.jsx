import { useState } from "react";
import { PageHeader, Button, Row, Col } from "antd";
import watermark from "@sangtian152/watermark";
import demoImg from "@/assets/demo.jpg";
import mark from "@/assets/logo.png";
import "./index.scss";
const ImageMark = () => {
  const [img, setImg] = useState("");
  const doMark = () => {
    const can = new watermark(demoImg, {
      fontSize: 26,
      fillStyle: "#fff",
      globalAlpha: 0.5,
      clip: {
        shape: "rect",
      },
    });
    can.addText("文字水印", {
      repeat: true,
      lineSpacing: 146,
      markSpacing: "50%",
    });
    can.addText("测试水印居中", {
      repeat: false,
      fontSize: 36,
      position: { right: "50%", bottom: "50%" },
      translate: "50%,50%",
    });
    can.addImage(mark, {
      repeat: false,
      markHeight: 26,
      lineSpacing: 146,
      start: 36,
    });
    can.draw(function () {
      setImg(can.getBase64());
    });
  };
  const doClear = () => {
    setImg("")
  }
  return (
    <main className="app-page watermark-page">
      <PageHeader
        title="图片加水印"
        className="site-page-header"
        extra={[
          <Button key="2" type="primary" onClick={doClear}>
            重置
          </Button>,
          <Button key="1" type="primary" onClick={doMark}>
            生成水印
          </Button>,
        ]}
      />
      <Row gutter={16}>
        <Col span={12}>
          <img src={demoImg} alt="404" />
        </Col>
        <Col span={12} className="right">
          {img ? <img src={img} alt="404" /> : null}
        </Col>
      </Row>
    </main>
  );
};

export default ImageMark;
