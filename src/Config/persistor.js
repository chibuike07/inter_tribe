import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Client from "./Apollo/Apollo.config";
const PersistGate = ({ children }) => (
  <ApolloProvider client={Client}>{children}</ApolloProvider>
);

export default PersistGate;
