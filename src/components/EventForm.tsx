import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { formatDate } from '../utils/date';

interface IComponentProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventFormComponent: React.FC<IComponentProps> = ({ guests, submit }) => {
  const { user } = useTypedSelector(state => state.auth);

  const submitForm = (values: IEvent) => {
    const { date, ...rest } = values;
    submit({
      ...rest,
      date: formatDate(date),
      author: user.username,
    });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.required(), rules.isDateAfter('Нельзя создать событи в прошлом')]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[rules.required()]}
      >
        <Select>
          {guests.map(guest =>
            <Select.Option
              key={guest.username}
              value={guest.username}
            >
              {guest.username}
            </Select.Option>
          )}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export const EventForm = EventFormComponent;
