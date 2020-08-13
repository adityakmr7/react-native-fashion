import React, { useRef } from "react";
import { Container, Button, Text } from "../../components";
import { Box } from "../../components/Theme";
import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../components/Footer";
interface LoginProps {}

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({}: LoginProps) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: { LoginSchema },
    initialValues: { email: "", password: "", remember: false },
    onSubmit: (values) => console.log(values),
  });

  const password = useRef<typeof TextInput>(null);
  const footer = (
    <Footer
      onPress={() => {}}
      title="Don't have an account?"
      action="Sign Up Here"
    />
  );
  return (
    <Container {...{ footer }}>
      <Box padding="l">
        <Text marginBottom="l" textAlign="center" variant="title1">
          Welcome back
        </Text>
        <Text marginBottom="l" textAlign="center" variant="body">
          Use your credentials below and login to your account.
        </Text>

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
            secureTextEntry
          />

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
              label="Login into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
