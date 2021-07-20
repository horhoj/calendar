import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { generatePath, useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { todoActions, todoSelectors } from '../../store/todos';
import { Todo, TodoType } from '../../types/todo';
import { todoListRoutes } from '../../routes';
import { GetDefaultValuesConfig, TodoFormProps, TodoFormSchema } from './types';
import { getDefaultValues, getFormTitle } from './helpers';

const Wrap = styled.div`
  border-radius: 5px;
  border: 1px solid #999;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  grid-row-gap: 10px;
`;

const FormTitle = styled.div`
  font-weight: bold;
`;

const Form = styled.form`
  display: grid;
  grid-row-gap: 10px;
`;

const CurrentId = styled.div``;

const CurrentDate = styled.div``;

const FormControlButtonsWrap = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #999;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
`;

const Input = styled.input`
  border: none;
  padding: 15px;
  background-color: #ddd;
  border-radius: 3px;
`;

const Select = styled.select`
  border: none;
  padding: 15px;
  background-color: #ddd;
  border-radius: 3px;
`;

const Option = styled.option`
  border: none;
  padding: 15px;
  background-color: #ddd;
  border-radius: 3px;
`;

const Label = styled.div`
  font-size: 0.75rem;
`;

const Box = styled.div`
  width: 100%;
  grid-row-gap: 2px;
  display: grid;
`;

const Errors = styled.div`
  color: red;
  font-size: 0.75rem;
`;

export const TodoForm: React.FC<TodoFormProps> = ({ id, currentDate }) => {
  const [formValues, setFormValues] = useState<Todo>(
    getDefaultValues({
      id: 0, //0 для новой заметки
      title: '',
      type: TodoType.NOTE,
      date: currentDate,
    }),
  );
  const dispatch = useAppDispatch();
  const todo = useAppSelector(todoSelectors.getTodo(id));
  const history = useHistory();

  useEffect(() => {
    if (todo) {
      setFormValues(todo);
    }
  }, [todo]);

  const goTodoList = () => {
    const path = generatePath(todoListRoutes.LIST);
    history.push(path);
  };

  const formik = useFormik<Todo>({
    enableReinitialize: true,
    initialValues: formValues,
    onSubmit: (values) => {
      if (values.id === 0) {
        dispatch(todoActions.addTodo(values));
      } else {
        dispatch(todoActions.updateTodo(values));
      }
      goTodoList();
    },
    validationSchema: TodoFormSchema,
  });

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const getDefaultValuesConfig: GetDefaultValuesConfig = {
      id: formik.values.id,
      title: formik.values.title,
      date: formik.values.date,
      type: e.target.value as TodoType,
    };

    const newFormValues = getDefaultValues(getDefaultValuesConfig);

    setFormValues(newFormValues);
  };

  return (
    <Wrap>
      <Container>
        <FormTitle>{getFormTitle(id)}</FormTitle>
        <Form onSubmit={formik.handleSubmit}>
          <CurrentId>
            ИД: {formik.values.id === 0 ? 'Новый' : formik.values.id}
          </CurrentId>

          <CurrentDate>Дата: {formik.values.date}</CurrentDate>

          <Box>
            <Label>Наименование</Label>
            <Input {...formik.getFieldProps('title')} autoComplete="off" />
            <Errors>{formik.errors.title}</Errors>
          </Box>

          <Box>
            <Label>Тип</Label>
            <Select
              {...formik.getFieldProps('type')}
              onChange={handleTypeChange}
            >
              <Option value={TodoType.HOLIDAY}>{TodoType.HOLIDAY}</Option>
              <Option value={TodoType.EVENT}>{TodoType.EVENT}</Option>
              <Option value={TodoType.NOTE}>{TodoType.NOTE}</Option>
            </Select>
          </Box>

          {formik.values.type === TodoType.HOLIDAY ? (
            <Box>
              <Label>Бюджет</Label>
              <Input {...formik.getFieldProps('budget')} />
            </Box>
          ) : null}
          {formik.values.type === TodoType.EVENT ? (
            <>
              <Box>
                <Label>Адрес</Label>
                <Input {...formik.getFieldProps('address')} />
              </Box>
              <Box>
                <Label>Время</Label>
                <Input {...formik.getFieldProps('time')} />
              </Box>
            </>
          ) : null}
          {formik.values.type === TodoType.NOTE ? (
            <Box>
              <Label>Контент</Label>
              <Input {...formik.getFieldProps('content')} />
            </Box>
          ) : null}
          <FormControlButtonsWrap>
            <Button type="submit">Сохранить</Button>
            <Button type="button" onClick={goTodoList}>
              Отмена
            </Button>
            <Button type="button" onClick={() => formik.resetForm}>
              Сброс
            </Button>
          </FormControlButtonsWrap>
        </Form>
      </Container>
    </Wrap>
  );
};
