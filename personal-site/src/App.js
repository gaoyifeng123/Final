import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <ProfileImage src="/profile.jpg" alt="个人照片" />
        <Title>我的个人网站</Title>
      </Header>
      
      <Section>
        <h2>关于我</h2>
        <p>你好！我是一名充满热情的开发者。我热爱编程，喜欢解决具有挑战性的问题。</p>
      </Section>

      <Section>
        <h2>技能</h2>
        <ul>
          <li>前端开发 (React, JavaScript)</li>
          <li>后端开发 (Node.js, Python)</li>
          <li>数据库 (MySQL, MongoDB)</li>
          <li>DevOps (Docker, CI/CD)</li>
        </ul>
      </Section>

      <Section>
        <h2>联系方式</h2>
        <p>邮箱：your.email@example.com</p>
        <p>GitHub：github.com/yourusername</p>
      </Section>
    </Container>
  );
};

export default App; 