import { ReactNode } from "react";

import { Flex, Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import antd from "../../dynamicStyles/antd";

import "./style.scss";

interface LayoutProps {
  children: ReactNode;
}

const GfLayout = ({ children }: LayoutProps) => {
  return (
    <Flex gap="middle" justify="center" wrap className="gf-layout">
      <Layout>
        <Header style={antd.headerStyle}>Header</Header>
        <div className="gf-layout-content">
          <Content style={antd.contentStyle}>{children}</Content>
        </div>
        <Footer style={antd.footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
  );
};

export default GfLayout;
