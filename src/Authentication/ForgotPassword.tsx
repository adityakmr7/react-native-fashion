import { StackNavigationProp } from "@react-navigation/stack";
import { useFormik } from "formik";
import React from "react";
import { Linking } from "react-native";
import * as Yup from "yup";
import { Button, Container, Text } from "../components";
import { Routes } from "../components/Navigation";
import { Box } from "../components/Theme";
import Footer from "./components/Footer";
import Checkbox from "./components/Form/Checkbox";
import TextInput from "./components/Form/TextInput";
interface ForgotPasswordProps {}
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProp<Routes, "ForgotPassword">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema,
    initialValues: { email: "", remember: false },
    onSubmit: (values) => {
      console.log(values);
      navigation.navigate("PasswordChanged");
    },
  });
  const footer = (
    <Footer
      onPress={() => {
        Linking.openURL("mailto:help@support.com");
      }}
      title="Don't work?"
      action="Try another way"
    />
  );
  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding="l">
        <Text marginBottom="l" textAlign="center" variant="title1">
          Forgot Password ?
        </Text>
        <Text marginBottom="l" textAlign="center" variant="body">
          Use your credentials below and login to your account.
        </Text>
        <Box height={70} />
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter Your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>

          <Box flexDirection="row" justifyContent="space-between">
            <Box marginTop="s">
              <Checkbox
                checked={values.remember}
                onChange={() => setFieldValue("remember", !values.remember)}
                label="Remember me"
              />
            </Box>
            <Button onPress={() => true} varient="transparent">
              <Text color="primary">Forgot password</Text>
            </Button>
          </Box>
          <Box marginTop="m" alignItems="center">
            <Button
              varient="primary"
              onPress={handleSubmit}
              label="Rest Password"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
