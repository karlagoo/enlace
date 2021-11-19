import React, { useEffect } from 'react'
import Auth from '../../utils/auth';
import { Alert, Button, Container, Row } from 'react-bootstrap';
import InviteBtn from '../InviteBtn';
import { QUERY_PENDING } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const PersonalInfo = () => {
    const userToken = Auth.getToken();
    const userInfo = Auth.getUserInfo(userToken);
    const userName = userInfo.data.userName;
    const userId = userInfo.data._id



    const { data, error } = useQuery(QUERY_PENDING,
        {
            variables: { _id: `${userId}` }
        });

    if (data) {
        return (
            <Alert variant="success">
                <Alert.Heading>Welcome back, {userName}!</Alert.Heading>
                <p>
                    You have {data.pendingInvites.pendingInvites.length} pending invites.
                </p>
                <hr />
                <Container>
                    <Button className="col-12" href="#pendingInvites">See Pending Invites</Button>
                    <hr />
                    <InviteBtn />
                </Container>
            </Alert>
        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
}

export default PersonalInfo;
