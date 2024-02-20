import React, { useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';
import { EventCalendar } from '../components/EventCalendar';
import { EventForm } from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const EventComponent: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(state => state.events);
  const { user } = useTypedSelector(state => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    createEvent(event);
    setOpenModal(false);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setOpenModal(true)}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        open={openModal}
        footer={null}
        onCancel={() => setOpenModal(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export const Event = EventComponent;
