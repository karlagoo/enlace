import React, { useState } from 'react';
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { QUERY_PENDING } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';


const PenInvs = () => {
    const [pending, setPending] = useState({})

    const userToken = Auth.getToken();
    const userInfo = Auth.getUserInfo(userToken);
    const userId = userInfo.data._id
    
    const { data, error } = useQuery(QUERY_PENDING,
    {
        variables: {_id: `${userId}`}
    });
    console.log(data.pendingInvites.pendingInvites)

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
                        <Button>Accept Event Invite</Button>
                        <Button>Decline Event Invite</Button>
                    </div>
                    <Badge variant="primary" pill>
                        14 people attending
                    </Badge>
                </ListGroup.Item>
            </ListGroup>))}
        </div>
    )
}

export default PenInvs
