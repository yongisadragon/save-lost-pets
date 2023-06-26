import React from 'react';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

import MainLayout from '../../components/common/MainLayout/MainLayout';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';

const UserList = styled.ul`
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  li {
    max-width: 390px;
    padding-bottom: 20px;
  }
  a {
    width: 100%;
    display: flex;
  }
  .userName {
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
  }
  .accountName {
    color: #767676;
    font-size: 12px;
    line-height: 15px;
  }
`;

const Contents = ({ userList }) => {
  return (
    <MainLayout>
      <Wrapper>
        <UserList>
          {userList.map((item) => (
            <li key={item._id}>
              <a>
                <PostUserProfileImg userProfileImg={item.image} />
                <div>
                  <p className='userName'>{item.username}</p>
                  <p className='accountName'>{item.accountname}</p>
                </div>
              </a>
            </li>
          ))}
        </UserList>
      </Wrapper>
    </MainLayout>
  );
};

export default Contents;
