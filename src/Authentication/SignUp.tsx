import { StackNavigationProp } from "@react-navigation/stack";
import { useFormik } from "formik";
import React, { useRef } from "react";
import * as Yup from "yup";
import { Button, Container, Text } from "../components";
import { Routes } from "../components/Navigation";
import { Box } from "../components/Theme";
import Footer from "./components/Footer";
import TextInput from "./components/Form/TextInput";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Password don't match")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProp<Routes, "SignUp">) => {
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
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      remember: false,
    },
    onSubmit: (values) => console.log(values),
  });
  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);
  const footer = (
    <Footer
      onPress={() => {
        navigation.navigate("Login");
      }}
      title="Already have an account?"
      action="Login Here"
    />
  );
  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding="l">
        <Text marginBottom="l" textAlign="center" variant="title1">
          Create account
        </Text>
        <Text marginBottom="l" textAlign="center" variant="body">
          Let's us know what your name,email and your password.
        </Text>

        <Box>
          {/* <Box height={200} /> */}

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
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
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
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
              secureTextEntry
            />
          </Box>
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Confirm Password"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            autoCompleteType="password"
            secureTextEntry
            autoCapitalize="none"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />

          <Box marginTop="m" alignItems="center">
            <Button
              varient="primary"
              onPress={handleSubmit}
              label="Create your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
