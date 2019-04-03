import Layout from "../src/components/Layout";
// import { Mutation } from "react-apollo";
// import gql from "graphql-tag";
// import { loginMutation } from "graphql/user/mutations/login";
import { LoginComponent } from "../generated/apolloComponents";

const IndexPage = () => (
  <Layout>
    <h1>Testing Next.js App written in TypeScript with Jest</h1>
    <LoginComponent>
      {mutate => (
        <button
          onClick={async () => {
            const response = await mutate({
              variables: {
                email: "ksdfjk",
                password: "skdfjdk"
              }
            });
            console.log(response);
          }}
        >
          call login mutation
        </button>
      )}
    </LoginComponent>
  </Layout>
);

export default IndexPage;
