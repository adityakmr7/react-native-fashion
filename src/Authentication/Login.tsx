import { useFormik } from "formik";
import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import * as Yup from "yup";
import { Button, Container, Text } from "../components";
import { AuthNavigationProps } from "../components/Navigation";
import { Box } from "../components/Theme";
import Footer from "./components/Footer";
import Checkbox from "./components/Form/Checkbox";
import TextInput from "./components/Form/TextInput";
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
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
    initialValues: { email: "", password: "", remember: false },
    onSubmit: (values) => {
      console.log(values);
      navigation.navigate("Home");
    },
  });

  const password = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      onPress={() => {
        navigation.navigate("SignUp");
      }}
      title="Don't have an account?"
      action="Sign Up Here"
    />
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="l">
        <Text marginBottom="l" textAlign="center" variant="title1">
          Welcome back
        </Text>
        <Text marginBottom="l" textAlign="center" variant="body">
          Use your credentials below and login to your account.
        </Text>

        <Box>
          <Box marginBottom="l">
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
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>

          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            secureTextEntry
            autoCapitalize="none"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
          />

          <Box
            marginVertical="m"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box marginTop="s">
              <Checkbox
                checked={values.remember}
                onChange={() => setFieldValue("remember", !values.remember)}
                label="Remember me"
              />
            </Box>
            <BorderlessButton onPress={() => true}>
              <Text variant="button" color="primary">
                Forgot password
              </Text>
            </BorderlessButton>
          </Box>
          <Box marginTop="m" alignItems="center">
            <Button
              varient="primary"
              onPress={handleSubmit}
              label="Login into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
