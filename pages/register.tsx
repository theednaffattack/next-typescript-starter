import React from "react";
import { Flex, Text } from "rebass";
import { Formik, Field } from "formik";

import Layout from "../src/components/Layout";
import { InputField } from "../src/components/Fields/InputField";
import { RegisterComponent } from "../generated/apolloComponents";
import { registerMutation } from "../graphql/user/mutations/register";

export default () => {
  return (
    <Layout title="Register">
      <RegisterComponent mutation={registerMutation}>
        {register => (
          <Formik
            onSubmit={async data => {
              const response = await register({
                variables: {
                  data
                }
              });

              console.log(response);
            }}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: ""
            }}
          >
            {({ values, handleSubmit }) => (
              <Flex flexDirection="column" width={[1]}>
                <Text>register form</Text> {values.email} {values.firstName}
                <form onSubmit={handleSubmit}>
                  <Flex flexDirection="column" width={["200px"]}>
                    <Field
                      name="email"
                      typ="email"
                      placeholder="email"
                      component={InputField}
                    />
                    <Field
                      name="firstName"
                      placeholder="first name"
                      component={InputField}
                    />
                    <Field
                      name="lastName"
                      placeholder="last name"
                      component={InputField}
                    />
                    <Field
                      name="password"
                      type="password"
                      placeholder="password"
                      component={InputField}
                    />
                  </Flex>
                  <button type="submit">submit</button>
                </form>
              </Flex>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};
