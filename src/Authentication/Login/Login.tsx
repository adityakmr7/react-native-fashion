import React from "react";
import { Container, Button, Text } from "../../components";
import SocialLogin from "../components/SocialLogin";
import { Box } from "../../components/Theme";
import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import { Formik } from "formik";
import * as Yup from "yup";
interface LoginProps {}

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({}: LoginProps) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button onPress={() => alert("Signup")} variant="transparent">
          <Box flexDirection="row" justifyContent="center">
            <Text color="white" variant="button">
              Don't have an account ?
            </Text>
            <Text marginLeft="s" color="primary" variant="button">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
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

        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter Your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>

              <TextInput
                icon="lock"
                placeholder="Enter Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
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
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
