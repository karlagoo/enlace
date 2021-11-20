import React, { useEffect } from 'react'
import Auth from '../../utils/auth';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
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
            <Alert className="col-12 col-lg-4 " style={{ backgroundColor: '#02353C', borderColor: "#02353C", color: 'white' }}>
                <Alert.Heading style={{fontWeight: "bolder"}}>Welcome back, {userName}!</Alert.Heading>
                <p style={{fontStyle: 'italic'}}>
                    You have {data.pendingInvites.pendingInvites.length} pending invites.
                </p>
                <hr />
                <Container >
                    <Button className="col-12" style={{ backgroundColor: '#449342', borderColor: "#449342", borderRadius: "15px" }} href="#pendingInvites">See Pending Invites</Button>
                    <hr />
                    <InviteBtn />
                </Container>
            </Alert>
        )
    }
    else {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
}

export default PersonalInfo;
