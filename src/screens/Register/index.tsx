import { useEffect, useState } from "react";
import moment from "moment";
import { Alert, TouchableOpacity, View } from "react-native";
import { ButtonContainer, ButtonForm, ButtonStatus, ButtonText, Container, Content, Field, FieldContainer, Footer, Header, HeaderTitle, Icon, Input, InputDateTime, InputDateTimeText, Label, TextArea } from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { Button } from "@components/Button";
import { addOrUpdateMeal } from "@storage/meal/addOrUpdateMeal";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

type DateTimeModalProps = {
  mode: 'datetime' | 'date' | 'time'
  open: boolean
}

export function Register() {
  const [dateTimeModal, setDateTimeModal] = useState<DateTimeModalProps>({
    mode: 'date',
    open: false
  })

  const [id, setId] = useState<string | undefined>(undefined)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date())
  const [hour, setHour] = useState(new Date())
  const [onDiet, setOnDiet] = useState(true)

  const navigation = useNavigation()
  const route = useRoute()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleRegisterMeal() {
    try {
      if (name.trim().length === 0 || description.trim().length === 0) {
        return Alert.alert('Nova Refeição', 'Preencha todos os campos')
      }

      await addOrUpdateMeal({
        id,
        name,
        description,
        date,
        hour,
        onDiet
      })

      navigation.navigate('response',  { type: onDiet ? "success" : "failure" })
    } catch (error) {
      Alert.alert("Nova Refeição", "Não foi possível criar uma nova refeição.")
      console.log(error)
    }

    navigation.navigate('response', { type: onDiet ? 'success' : 'failure' })
  }

  useEffect(() => {
    const { id, name, description, date, hour, onDiet } = route.params as Partial<MealStorageDTO>
    setId(id)
    setName(name ?? '')
    setDescription(description ?? '')
    setDate(date ?? new Date())
    setHour(hour ?? new Date())
    setOnDiet(onDiet ?? true)
  }, [route.params])

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </TouchableOpacity>
        <HeaderTitle>Nova Refeição</HeaderTitle>
        <View style={{ width: 24 }} />
      </Header>

      <Content>
        <Field>
          <Label>Nome</Label>
          <Input 
            onChangeText={setName}
            value={name}
          />
        </Field>

        <Field>
          <Label>Descrição</Label>
          <TextArea 
            multiline
            textAlignVertical="top"
            onChangeText={setDescription}
            value={description}
          />
        </Field>

        <FieldContainer>
          <Field size={48}>
            <Label>Data</Label>
            <InputDateTime onPress={() => setDateTimeModal({ mode: 'date', open: true })}>
              <InputDateTimeText>{moment(date).format('DD/MM/YYYY')}</InputDateTimeText>
            </InputDateTime>
          </Field>

          <Field size={48}>
            <Label>Hora</Label>
            <InputDateTime onPress={() => setDateTimeModal({ mode: 'time', open: true })}>
              <InputDateTimeText>{moment(hour).format('HH:MM')}</InputDateTimeText>
            </InputDateTime>
          </Field>
        </FieldContainer>

        <Label>Está dentro da dieta?</Label>
        <ButtonContainer>
          <ButtonForm onPress={() => setOnDiet(true)} type={onDiet ? 'success' : undefined}>
            <ButtonStatus type="success" />
            <ButtonText>Sim</ButtonText>
          </ButtonForm>

          <ButtonForm onPress={() => setOnDiet(false)} type={!onDiet ? 'fail' : undefined}>
            <ButtonStatus type="fail" />
            <ButtonText>Não</ButtonText>
          </ButtonForm>
        </ButtonContainer>
      </Content>

      <Footer>
        <Button 
          title={ id ? "Atualizar refeição" : "Cadastra refeição"}
          onPress={handleRegisterMeal}
        />
      </Footer>

      {
        dateTimeModal.open ? (
          <DateTimePicker
            mode={dateTimeModal.mode}
            value={new Date()}
            locale="pt-BR"
            onChange={(event: DateTimePickerEvent, date?: Date | undefined) => {
              if (dateTimeModal.mode === 'date' && date) {
                setDate(date)
              } else if (dateTimeModal.mode === 'time' && date) {
                setHour(date)
              }
              setDateTimeModal({
                mode: dateTimeModal.mode,
                open: false
              })
            }}
          />
        ) : null

      }
    </Container>
  )
}