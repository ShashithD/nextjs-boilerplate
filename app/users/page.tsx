'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/slices/userReducer';
import { AppDispatch, RootState } from '@/redux/store';

const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users = useSelector((state: RootState) => state?.user?.users);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
