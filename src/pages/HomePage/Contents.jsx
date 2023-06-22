import { React, useState } from 'react';

import home from '../../assets/symbol-logo-gray.png';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 108px);
  margin-top: 48px;
`;

const Section = styled.section`
  text-align: center;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 20px;
  &::before {
    content: '';
    display: block;
    background: url(${home}) no-repeat center/ 100px 100px;
    width: 100px;
    height: 100px;
    margin: 0 auto 25px;
  }
`;

const SearchIcon = styled.a`
  width: 120px;
  height: 44px;
  display: inline-block;
  padding: 15px 0;
  background: #f26e22;
  border-radius: 44px;
  color: #ffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17.53px;
`;

const Contents = ({ post }) => {
  return (
    <Main>
      <Section>
        {post.map((item) => {
          return (
            <ul>
              <li>
                <div>
                  <img src='' alt='' />
                  <p>{item.author.username}</p>
                  <p>{item.author.accountname}</p>
                  <button>수정/삭제</button>
                </div>
                <div>
                  <p>{item.content}</p>
                  <button>좋아용!</button>
                  <button>댓글!</button>
                </div>
              </li>
            </ul>
          );
        })}
        <P>유저를 검색해 팔로우 해보세요!</P>
        <SearchIcon href='/search'>검색하기</SearchIcon>
      </Section>
    </Main>
  );
};

export default Contents;

{
  /* <li key={post.id}>
<div
userInfo={userInfo}
postContent={post.content}
postImg={post.image}
today={today}
onClick={onClick}
itemPostId={post.id}
setPostId={() => setPostId(post.id)}
/>
</li> */
}
