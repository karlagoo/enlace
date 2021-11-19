import React from 'react';
import { ListGroup, Badge, Button, Spinner } from 'react-bootstrap';
import { QUERY_PENDING } from '../../utils/queries';
import { UPDATE_EVENT_USER, DECLINE_INVITE } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';


const PenInvs = () => {

    const userToken = Auth.getToken();
    const userInfo = Auth.getUserInfo(userToken);
    const userId = userInfo.data._id;
    const userEmail = userInfo.data.email;

    const [updateUser, { error }] = useMutation(UPDATE_EVENT_USER);
    const [declineInvite, { dad }] = useMutation(DECLINE_INVITE);
    const { data } = useQuery(QUERY_PENDING,
        {
            variables: { _id: `${userId}` }
        });

    const acceptInvite = async (e) => {
        e.preventDefault();
        const id = e.target.id;
        console.log("hey dad", e.target.id, userEmail)
        try {
            const update = await updateUser(
                {
                    variables: {
                        _id: id,
                        userId: userId
                    }
                }
            )
            const updateDecline = await declineInvite(
                {
                    variables: {
                        _id: id,
                        email: userEmail
                    }
                }
            )
            console.log(update, updateDecline)
        }
        catch (err) {
            console.log(err)
        }
    }

    const declinePending = async (e) => {
        e.preventDefault();
        const id = e.target.id;
        console.log(id)
        try {
            const update = await declineInvite(
                {
                    variables: {
                        _id: id,
                        email: userEmail
                    }
                }
            )
            console.log(update)
        }
        catch (err) {
            console.log(err)
        }
    }

    if (data) {
        return (
            <div>
                <h3 id="pendingInvites">Pending Invites</h3>
                {data.pendingInvites.pendingInvites.map((event) => (<ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="ul"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{event.title}</div>
                            <div>On {event.date}, at {event.time}</div>
                            <div>{event.description}</div>
                            <div>Invited by:</div>
                            <Button onClick={acceptInvite} id={event._id}>Accept Event Invite</Button>
                            <Button onClick={declinePending} id={event._id}>Decline Event Invite</Button>
                            <Button onClick={() => console.log(data)} id={event._id}>Decline Event Invite</Button>
                        </div>
                        <Badge variant="primary" pill>
                            {event.date} people attending
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>))}
            </div>
        )
    }
    else {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
};

export default PenInvs;
