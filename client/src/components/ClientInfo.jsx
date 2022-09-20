import React from 'react';
import { FaEnvelope, FaIdBadge, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const List = styled.ul`
  border-top: none !important;
`;

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <List className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {client.phone}
        </li>
      </List>
    </>
  );
}
