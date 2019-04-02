import Layout from "../src/components/Layout";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const IndexPage = () => (
  <Layout>
    {" "}
    <h1>Testing Next.js App written in TypeScript with Jest</h1>
    <Mutation
      mutation={gql`
        mutation {
          login(password: "idk", email: "eddie@eddienaff.dev") {
            firstName
            lastName
            email
            name
            id
          }
        }
      `}
    >
      {mutate => (
        <button
          onClick={async () => {
            const response = await mutate();
            console.log(response);
          }}
        >
          call login mutation
        </button>
      )}
    </Mutation>
  </Layout>
);

export default IndexPage;
