import React, {FC} from 'react';
import {useTypedSelector} from '../hooks/use-typed-selector';

const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector((state) => state.user);
    console.log(users);
    return (
        <div>

        </div>
    );
};

export default  UserList;
